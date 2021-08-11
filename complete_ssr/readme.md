# 服务的启动
1. nodemon 进行node.js的自动更新服务
2. wepack --watch 进行打包的自动更新服务
3. npm-run-all,"dev": "npm-run-all --parallel dev:**" 同时启动多个服务

# 同构
同构：一套react代码，在服务端执行一次，在客户端也执行一次，
reactDom.renderToString将jsx转为html文本的时候，不会处理jsx上面的attrs的事件属性。
所以需要在客户端再执行一次react代码，把事件属性生效
1. 服务端渲染jsx->html,使用ReactDom.renderToString生成
2. 客户端在运行jsx->html,使用ReactDom.hydrate进行客户端的再次渲染
这里客户端的代码写在client,用webpack.client.js打包，打包到src/public目录。
服务端的代码写在server,用webpack.server.js打包，打包到build目录。
流程：服务端运行react渲染出html->发送html到浏览器->浏览器加载js文件->js中的react代码重新执行->js中的react代码接管页面操作。

# 路由的处理
客户端使用BrowserRouter, 服务端使用StaticRouter。
客户端执行react-router的时候，是可以知道浏览器当前的url的。
然而服务端只是返回的StaticRouter生成的html文本。StaticRouter并不知道当前浏览器访问的路径
所以需要node app应用将自己的context.request.path传入到StaticRouter，再渲染出对应的html文本。

BrowserRouter做了处理机制，它的原理是history实现的。
在本地的跳转<Link>,history.go,这些都是执行本地的react代码返回对应的文本
当在浏览器输入访问地址的时候是访问的服务器的。

const routes = {
  '/foo': foo,
  '/bar': bar
}
class Router {
  start() {
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })
    this.load(location.pathname)
  }
  go(path) {
    history.pushState({}, '', path)
    this.load(path)
  }
  load(path) {
    if (path === '/') path = '/foo'
    const view = new routes[path]()
    view.mount(document.body)
  }
}

# store-context
这里react使用store的时候，应该是返回一个匿名函数生成的store实例，保证每个用户拿到的store不一样
另外再服务端renderToString这个函数不会执行组件的生命周期函数。所以客户端的生命周期运行生成的数据，服务端拿不到。

# 异步数据服务器渲染
    目标：更具用户访问的路径不同，加载不同的异步数据。
    现在改写路由，给组件添加静态方法loadData。
    react-router-dom提供了matchPath(处理单级路由)，react-router-config提供了matchRoutes(处理多级路由)来处理异步数据的加载,然后更新store的值。再将store传入app组件。

    但是客户端在执行一次redux-hook的时候，初始数据是空的。
    为了保证服务端与客户端的数据统一，需要出水与注水操作。
    注水：将服务端渲染的数据放到script中的window.context
    出水：客户端的store初始数据从window.context里面拿


# 客户端的数据处理
    之前的客户端数据请求都是跟服务器直接获取数据，不太好
    现在要改成和代理服务器(node端)请求数据，node端作为代理
    再和服务器请求数据。这样出错就知道是哪一方出错了

    这里需要koa-proxy做代理处理: '/api/' -> '/ssr/api/req.url'

    axios
        的instance: 请求路径前缀的配置
        client/request.js:
        const instance = axios.create({
            baseURL: '/',
        })
        server/request.js:
        const instance = axios.create({
            baseURL: 'http://host/ssr',
        })
        的interceptors: 请求和响应的劫持处理


# 多级路由的支持
    renderRoutes实现多级路由的支持
    有些公共组件在每一个路由中都使用到了，使用renderRoutes渲染一级路由，给一级路由组件传入props,再次调用renderRoutes渲染二级路由

# 404页面的编写
    多级路由下，没有配置的路径显示404组件
    服务端的staticRouter的context对象添加一个NotFound属性作为标识
    context.status = 404

# 301的重定向
    react-router的Redirect组件调用的时候，服务端用的staticRouter，
    这个里面的context对象会增加一个action属性。

# 样式的处理
    服务端不能用style-loader, css-loader. 因为在nodeJs中window是不存在的。
    这里需要使用isomorphic-style-loader插件
    use: ['isomorphic-style-loader', {loader: 'css-loader', options: {esModule: false}}]

    isomorphic-style-loader的神坑，必须使用CommonJs模块语法，必须写上esModule:false

    isomorphic-style-loader这个插件不会将css文案写入到html中。它只会生成className
    服务端需要这么处理
    import styles from './style.css'
    if(props.staticContext) {
        props.staticContext.css.push(styles._getCss())
    }
    /server/index.js
    const ctx = {css: []}
    /server/utils.js
    const cssStr = ctx.css.length ? ctx.css.join('\n') : ''
    在return中假如<style>${ctx.css}</style>

    追一这里的props.staticContext只有满足路径的组件才能获取到，子组件需要通过props传递才行。
    <Child staticContext={props.staticContext} />


# seo
    1. <title></title> <meta name="descirption" content="">
    2. react-helmet插件
       ’‘’
            container:
            <Helment>
                <title />
                <meta name="description" content="" />
            </Helment>

            server/utils:
            const helmet = Helmet.renderStatic()
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
       ‘’‘

# 预渲染技术
    同样还是react项目，但是如果是遇到蜘蛛搜索的时候，
    使用预渲染服务器将react转成html，再返回给搜索服务器。
    工具: prerender库
    const prerender = require('prerender')
    const server = prerender({
        port: 3000
    })
    server.start()
    访问地址: localhost:3000/render?url='需要预渲染的页面url'
    如何识别访问我们网站的是蜘蛛还是普通用户呢？
    这里使用nginx服务器的构建处理。

    和ssr相比，如果只是为了单纯的seo，使用预渲染技术。ssr写起来代码增加量会多很多。ssr比起预渲染的优点是首屏加载的时间更短。
    预渲染识别是蜘蛛搜索的时候，自己创建了一个浏览器，在这个浏览器里面打开需要访问的页面地址，渲染成html后，返回给蜘蛛搜索服务器



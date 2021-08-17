const koa = require("koa");
const bodyParser = require("koa-bodyParser");
const staticFiles = require("koa-static");
const router = require("koa-router")();
const proxy = require("koa2-proxy-middleware");
const path = require("path");

import { matchRoutes } from "react-router-config";
import { render } from "./utils";
import Routes from "../Routes";
import { initStore } from "../store/global";

const app = new koa();
const cors = require("@koa/cors");

app.use(
    cors({
        origin: "*",
    })
);

// 代理配置, 形如uri: `${protocal}://${hostname}/api/${path}`的请求装交给代理服务器
// 假设服务接口url: http://49.235.72.243:3001
app.use(
    proxy({
        targets: {
            "/api/(.*)": {
                target: "http://49.235.72.243:3001",
                changeOrigin: true,
                pathRewrite: {
                    "/api": "/api", // rewrite path
                },
            },
        },
    })
);


app.use(
    bodyParser({
        multipart: true,
    })
);

// 静态文件设置，将客户端打代码打包到静态文件目录
app.use(
    staticFiles(path.resolve(__dirname, "../src/server/public"), {
        maxage: 30 * 24 * 60 * 60 * 1000,
    })
);


router.get("/(.*)", async (context, next) => {
    // 根据路由的路径，来往store里面加数据
    const promises = [];
    const matchedRoutes = matchRoutes(Routes, context.request.path);
    // 让matchRoutes里面的所有组件对应的loadData方法执行一次
    // 使得数据提前加载好在渲染。
    matchedRoutes.forEach((item) => {
        if (item.route.loadData) {
            const promise = new Promise((resolve, reject) => {
                return item.route
                    .loadData(initStore)
                    .then(resolve())
                    .catch(resolve());
            });
            promises.push(promise);
        }
    });
    Promise.all(promises).then(() => {
        const ctx = {
            css: [],
        };
        const html = render(context.request, Routes, ctx);
        console.log("ctx", ctx)
        if (ctx.notFound) {
            context.response.status = 404;
        }
        // staticRouter的Redirect组件被调用
        // ctx增加了action,url属性
        if (ctx.action === "REPLACE") {
            context.response.redirect(301, ctx.url);
        }
        context.response.body = html;
    });
    await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("app service start at http://localhost:3000");
});

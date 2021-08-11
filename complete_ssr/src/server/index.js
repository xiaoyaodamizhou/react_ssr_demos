const koa = require("koa");
const bodyParser = require("koa-bodyParser");
const staticFiles = require("koa-static");
const nunjucks = require("koa-nunjucks-2");
const router = require("koa-router")();
const Koa = require("koa");
const proxy = require("koa2-proxy-middleware");
const app = new koa();
const JSON_MIME = "application/json";
const path = require("path");
import { matchRoutes } from "react-router-config";
import { render } from "./utils";
import Routes from "../Routes";
import { initStore } from "../store/global";


const cors = require("@koa/cors");
const log = console.log.bind(console);

app.use(
    cors({
        origin: "*",
    })
);

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

app.use(
    staticFiles(path.resolve(__dirname, "../src/server/public"), {
        maxage: 30 * 24 * 60 * 60 * 1000,
    })
);

app.use(
    nunjucks({
        ext: "html",
        path: path.join(__dirname, "../src/server/views"),
        nunjucksConfig: {
            trimBlocks: true,
        },
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
    console.log("app service start at 3000");
});

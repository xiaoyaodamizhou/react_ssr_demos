const koa = require("koa");
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
const router = require("koa-router")();
const app = new koa();
import Routes from "./router";


function render(req, Routes, ctx) {
    const content = renderToString(
        <StaticRouter context={ctx} location={req.path}>
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic()
    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
        </html>
    `;
}


router.get("/(.*)", async (context, next) => {
    const ctx = {};
    const html = render(context.request, Routes, ctx);
    if (ctx.notFound) {
        context.response.status = 404;
    }
    if (ctx.action === "REPLACE") {
        // StaticRouter需要传一个ctx参数
        // staticRouter的Redirect组件被调用, ctx会增加了action,url属性
        context.response.redirect(301, ctx.url);
    }
    console.log('ctx', ctx)
    context.response.body = html;
    await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});

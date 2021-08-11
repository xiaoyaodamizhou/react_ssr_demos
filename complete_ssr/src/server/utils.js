import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import {Helmet} from "react-helmet";

import {
    Store as GlobalStore,
    useReduxHook as useGlobalReduxHook,
    initStore,
} from "../store/global";

function GlobalProvider({ children }) {
    const [state, dispatch] = useGlobalReduxHook();
    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStore.Provider>
    );
}

export function render(req, Routes, ctx) {
    const content = renderToString(
        <GlobalProvider>
            <StaticRouter context={ctx} location={req.path}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </GlobalProvider>
    );

    const cssStr = ctx.css.length ? ctx.css.join("\n") : "";
    const helmet = Helmet.renderStatic()
    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
            </head>
            <style>${cssStr}</style>
            <body>
                <div id="root">${content}</div>
                <script>
                        window.context = {
                            state: ${JSON.stringify(initStore)}
                        }
                </script>
                <script src='/index.js'></script>
            </body>
        </html>
    `;
}

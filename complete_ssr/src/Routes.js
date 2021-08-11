import React from "react";
import Home from "@/containers/Home";
import Login from "@/containers/Login";
import NotFound from "@/containers/NotFound"
import App from "@/App";

export default [
    {
        path: "/",
        component: App,
        key: "app",
        routes: [
            {
                path: "/",
                component: Home,
                exact: true,
                key: "home",
                loadData: Home.loadData,
            },
            {
                path: "/login",
                component: Login,
                key: "login",
                exact: true,
            },
            // 没有配置的页面显示404
            {
                component: NotFound,
            }
        ],
    },
];

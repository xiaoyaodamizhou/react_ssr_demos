import React, { useContext, useEffect } from "react";
import { Store as GlobalStore } from "@/store/global";
import clientAxios from "@/client/request";
import serverAxios from "@/server/request";
import { Helmet } from "react-helmet";
import styles from "./index.css";

const Home = (props) => {
    // 服务端isomorphic-style-loader插件会给styles绑定_getCss()方法
    console.log("css", styles)
    console.log('server home props:', props)
    props.staticContext && props.staticContext.css.push(styles._getCss());
    const { dispatch: globalDispatch, state: globalState } = useContext(
        GlobalStore
    );
    const { userInfo, weatherMessage } = globalState;

    useEffect(() => {
        // 客户端首先加载的页面是login,所以服务器不会执行Home.loadData方法，所以initStore的数据并没有被渲染好，这个时候
        // 客户端拿到的初始store的出水操作时空值，所以这种情况还是需要再发一次请求
        if (!globalState.weatherMessage) {
            clientAxios
                .get("api/homedata")
                .then((response) => {
                    globalDispatch({
                        type: "WEATHER_MESSAGE",
                        payload: response.data.weatherMessage,
                    });
                })
                .catch((err) => {
                    console.log("error", err);
                });
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <Helmet>
                <meta name="description" content="react ssr 首页"></meta>
                <title>首页</title>
            </Helmet>
            <h1 className={styles.title}>hello, {userInfo.name}</h1>
            <div>weaher信息: {weatherMessage}</div>
            <button
                onClick={() => {
                    globalDispatch({
                        type: "UPDATE_USER_INFO",
                        payload: {
                            name: "tomas",
                        },
                    });
                }}
                className="test"
            >
                clicked!
            </button>
        </div>
    );
};

Home.loadData = (Store) => {
    return serverAxios
        .get("/api/homedata")
        .then((response) => {
            Store.weatherMessage = response.data.weatherMessage;
        })
        .catch((err) => {
            console.log("error", err);
        });
};

export default Home;

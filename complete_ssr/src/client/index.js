import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Routes";
import { renderRoutes } from "react-router-config";
import {
    Store as GlobalStore,
    useClientReduxHook as useGlobalReduxHook,
} from "../store/global";


function GlobalProvider({ children }) {
    const [state, dispatch] = useGlobalReduxHook();
    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStore.Provider>
    );
}

const App = () => {
    return (
        <GlobalProvider>
                <BrowserRouter>
                    <div>{renderRoutes(Routes)}</div>
                </BrowserRouter>
        </GlobalProvider>
    );
};

/*
在browserHistory 模式下，URL 是指向真实 URL 的资源路径，当通过真实 URL 访问网站的时候，由于路径是指向服务器的真实路径，但该路径下并没有相关资源，所以用户访问的资源不存在。
*/
ReactDOM.hydrate(<App />, document.getElementById("root"));

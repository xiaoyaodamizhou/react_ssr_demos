import React from "react";
import {Helmet} from "react-helmet";

const Login = (props) => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="react ssr 登录页"></meta>
                <title>登录页</title>
            </Helmet>
            <div>login</div>
        </div>
    );
};

export default Login;

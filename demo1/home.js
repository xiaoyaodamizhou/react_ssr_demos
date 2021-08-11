import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="react ssr 首页"></meta>
                <title>首页</title>
            </Helmet>
            <h5>hello react ssr</h5>
            <button onClick={() => { alert('click event') }}>click</button>
        </div>
    )
}

export default Home


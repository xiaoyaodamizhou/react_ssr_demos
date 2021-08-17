const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.base");
const { getStyleLoaders } = require('./webpack.utils')

const clientConfig = {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    entry: {
        index: "./src/client/index.js",
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./src/server/public"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: getStyleLoaders({
                    importLoaders: 1,
                    modules: {
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                    }
                }),
            },
        ],
    },
};

module.exports = merge(config, clientConfig);

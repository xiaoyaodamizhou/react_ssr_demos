const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const config = require("./webpack.base");

const serverConfig = {
    target: "node",
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    entry: {
        index: "./src/server/index.js",
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [
                    "isomorphic-style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            esModule: false,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            }
                        },

                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    // 使用exteranls可以将import引用的包，每次打包的时候不需要对包进行打包编译操作，而是直接引用链接
    externals: [nodeExternals()],
};

module.exports = merge(config, serverConfig);

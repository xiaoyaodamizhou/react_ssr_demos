const path = require("path");

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: [
                                [
                                    "@babel/plugin-transform-runtime",
                                    {
                                        corejs: "3",
                                        helpers: true,
                                        regenerator: true,
                                        useESModule: false,
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
        ],
    },
};

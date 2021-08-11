const getStyleLoaders = (cssOptions, preProcessors, user) => {
    const loaders = [
        (user === 'client') && "style-loader",
        (user === 'server') && "isomorphic-style-loader",
        {
            loader: require.resolve("css-loader"),
            options: cssOptions,
        },
        {
            loader: require.resolve("postcss-loader"),
            options: {
                postcssOptions: {
                    plugins: [
                        require("postcss-preset-env")({
                            autoprefixer: {
                                overrideBrowderslist: "andoroid >= 4.3",
                            },
                            stage: 3,
                        }),
                        require("postcss-plugin-px2rem")({
                            rootValue: 75,
                            minPixelValue: 2,
                        }),
                    ],
                },
            },
        },
    ].filter(Boolean);

    if (preProcessors) {
        loaders.push({
            loader: require.resolve(preProcessors),
        });
    }
    return loaders;
};

module.exports = {
    getStyleLoaders,
}

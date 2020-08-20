import { Configuration } from "webpack-dev-server";

/**
 * Defines options for the webpack dev server middleware.
 */
export const defineDevServer = function(): Configuration {
    return {
        port: 3000,
        hot: true,
        historyApiFallback: {
            disableDotRule: true,
        },
        stats: "errors-only",
        noInfo: true,
    };
};

import path from "path";
import { Output } from "webpack";

/**
 * Defines how webpack outputs bundled files.
 * @param rootPath - the root path of the webserver.
 * @param env - the stringified environment name.
 */
export let defineOutput = function (rootPath: string, env?: string): Output {
  // Should the chunks be hashed based on content (for prod) or by builds (for dev)
  if (env) {
    return {
      path: path.join(rootPath, "build/www"),
      publicPath: "/",
      filename: "[name].[contenthash].js",
    };
  } else {
    let output: Output = {
      path: path.join(rootPath, "build/www"),
      publicPath: "/",
      filename: "main.js",
    };

    return output;
  }
};

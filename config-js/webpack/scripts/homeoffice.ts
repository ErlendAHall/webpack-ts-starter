import { defineOutput } from "../output";
import { defineDevServer } from "../../server/devServer";

import Dotenv from "dotenv-webpack";
import { Configuration } from "webpack";

import { rootPath } from "../root";
import { EnvironmentPaths } from "../../environments/environmentPaths";
import baseConfig from "./base";

const environmentPlugin = new Dotenv({
  path: EnvironmentPaths.homeoffice,
});

let config: Configuration = {
  ...baseConfig,
  module: baseConfig.module,
  resolve: baseConfig.resolve,
  plugins: [...baseConfig.plugins, environmentPlugin],
  devServer: defineDevServer(),
  devtool: "eval-source-map",
  output: defineOutput(rootPath),
};
export default config;

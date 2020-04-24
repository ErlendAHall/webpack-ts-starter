// Webpack third party plugins
import HtmlWebPackPlugin from "html-webpack-plugin";

// Webpack first party plugins
import { Plugin } from "webpack";

/** Handles the templating of index.html */

let htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: "./config/templates/index.html",
  filename: "./index.html",
});

// Export all plugins which are used in all environments.
export const defineBasePlugins = function (): Plugin[] {
  return [htmlWebPackPlugin /*,additionalPlugins*/];
};

/**
 * Export individual plugins.
 */
export { htmlWebPackPlugin };
// export {additionalPlugin};

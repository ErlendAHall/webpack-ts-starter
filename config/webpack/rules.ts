import { RuleSetRule, Module } from "webpack";

let transpiler: RuleSetRule = {
  test: /\.(js|jsx|tsx|ts)$/,
  exclude: [/node_modules/, /build/, "/server/server.js"],
  loader: "babel-loader",
  query: {
    cacheDirectory: true,
  },
};

let html: RuleSetRule = {
  test: /\.html$/,
  use: [{ loader: "html-loader" }],
};

let moduledLess: RuleSetRule = {
  test: /\.(less)$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader", options: { modules: true } },
    { loader: "less-loader" },
  ],
};

export const defineBaseRules = function (): Module {
  return {
    rules: [transpiler, html, moduledLess],
  };
};

/**
 * Export individual rules
 */
export { transpiler };
export { html };
export { moduledLess };

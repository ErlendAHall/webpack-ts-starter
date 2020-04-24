import { rootPath } from "../root";

// Configuration definitions
import { defineOutput } from "../output";
import { defineResolves } from "../resolve";
import { defineBaseRules } from "../rules";
import { defineBasePlugins } from "../plugins";

import { Configuration, Resolve, Module, Plugin, Output } from "webpack";

// This will help with type checking in environment scripts, aka "downstream environments".
interface BaseConfig extends Configuration {
  module: Module;
  resolve: Resolve;
  plugins: Plugin[];
  output: Output;
}

// Allows imports without specifying file-endings and aliases to minify long relative imports.
let resolve: Resolve = defineResolves(rootPath);

// Export the baseline config for environment specific overrides or extensions.
let baseConfig: BaseConfig = {
  module: defineBaseRules(),
  resolve: resolve,
  plugins: defineBasePlugins(),
  output: defineOutput(rootPath, "base"),
};

// Webpack requires config exports to be defaulted.
export default baseConfig;

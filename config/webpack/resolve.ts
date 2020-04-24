import { join } from "path";
import { Resolve } from "webpack";

/**
 * Defines default resolved extensions and aliases, both used in ESM imports.
 * @param rootPath - The root of the webserver.
 */
export let defineResolves = function (rootPath: string): Resolve {
  if (!rootPath) return {};
  return {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".less"],
  };
};

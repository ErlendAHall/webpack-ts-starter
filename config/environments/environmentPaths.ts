import { join } from "path";

const basePath = join(__dirname + "/.env");
const homeofficeEnv = basePath + ".homeoffice";

const EnvironmentPaths = {
  prod: basePath,
  homeoffice: homeofficeEnv,
};

const _EnvironmentPaths = Object.freeze(EnvironmentPaths);
export { _EnvironmentPaths as EnvironmentPaths };

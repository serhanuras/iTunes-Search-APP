import WebApi from "./web-api";
import MediaController from "./controllers/media-controller";
import EnvironmentVariables from "./utils/environment-variables";

import * as dotenv from "dotenv";

async function startApp() {
  const webApiPort: number = EnvironmentVariables.WEB_API_PORT;

  //Wake Up Web Api....
  const webApi = new WebApi([new MediaController()], webApiPort);

  const isWebApiStarted: boolean = await webApi.listen();

  if (!isWebApiStarted) {
    console.log("App cant be started...");
  }
}

startApp();

import dotnev from "dotenv";

export default class EnvironmentVariables {
  private static Config(): void {
    dotnev.config({ path: `${__dirname}/../../.env` });
  }

  static get WEB_API_URI(): string {
    this.Config();
    let WEB_API_URI = "";

    if (process.env.WEB_API_URI) {
      WEB_API_URI = process.env.WEB_API_URI as string;
    }

    return WEB_API_URI;
  }

  static get WEB_API_PORT(): number {
    this.Config();
    let webApiPort = 8089;

    if (process.env.WEB_API_PORT) {
      webApiPort = parseInt(process.env.WEB_API_PORT);
    }

    return webApiPort;
  }
}

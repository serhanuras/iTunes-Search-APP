import dotnev from "dotenv";

export default class EnvironmentVariables {
  private static Config(): void {
    dotnev.config({ path: `${__dirname}/../../.env` });
  }

  static get WEB_API_URI(): string {
    this.Config();
    let WEB_API_URI = "http://localhost:5001";

    if (process.env.WEB_API_URI) {
      WEB_API_URI = process.env.WEB_API_URI as string;
    }

    return WEB_API_URI;
  }
}

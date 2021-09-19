import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import cacheUtil from "../utils/cache-util";
import MediaService from "../services/media-service";
import EnvironmentVariables from "../utils/environment-variables";
import { response } from "express";

const mock = new MockAdapter(axios);
mock
  .onGet(`${EnvironmentVariables.WEB_API_URI}?term=termMock&entity=entityMock`)
  .reply(200, {
    resultCount: 5,
    results: [
      {
        artistName: "Jack Johnson",
      },
      {
        artistName: "Jack Johnson",
      },
      {
        artistName: "Jack Johnson",
      },
      {
        artistName: "Jack Johnson",
      },
      {
        artistName: "Jack Johnson",
      },
    ],
  });

mock
  .onGet(`${EnvironmentVariables.WEB_API_URI}?term=empty&entity=empty`)
  .reply(200, {
    resultCount: 0,
    results: [],
  });

describe("media service test", () => {
  beforeAll(() => {
    //console.log = jest.fn();
    //console.error = jest.fn();
    cacheUtil.get = jest.fn((params, callback) => {
      return undefined;
    });

    cacheUtil.save = jest.fn((params, callback) => {
      return {};
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("when any parameters are null it should throw exception.", async () => {
    try {
      const mediaService = new MediaService();

      mediaService.search();
    } catch (err) {
      expect(err.message).toContain("Invalid queryType..");
    }
  });

  it("when any parameters are ok it should items.", async () => {
    const mediaService = new MediaService();

    const result = await mediaService.search("termMock", "entityMock", 1);

    expect(result.length).toBe(5);
  });

  it("page number is less than 0, it should return exception.", async () => {
    try {
      const mediaService = new MediaService();

      const result = await mediaService.search("termMock", "entityMock", -1);
    } catch (err) {
      expect(err.message).toContain("Invalid queryType..");
    }
  });

  it("when requested page doesnt have data it should return empty array.", async () => {
    const mediaService = new MediaService();

    const result = await mediaService.search("termMock", "entityMock", 2);

    expect(result.length).toBe(0);
  });
});

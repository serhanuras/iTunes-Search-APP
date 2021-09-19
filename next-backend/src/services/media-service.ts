import axios from "axios";
import EnvironmentVariables from "../utils/environment-variables";
import InvalidRequestException from "../exceptions/invalid-request-exception";
import { EntityType, Media, MediaType } from "@next/models/lib/entities";
import WebApiException from "../exceptions/web-api-exception";
import cacheUtil from "../utils/cache-util";

export default class MediaService {
  public async search(
    term?: string,
    entityType?: string,
    page?: number
  ): Promise<Media[]> {
    if (!term || !entityType || !page || page < 0)
      throw new InvalidRequestException(402, "Invalid queryType...");

    const cacheKey = term + entityType;
    const pageSize = 10;

    let cachedValue: Media[] = cacheUtil.get(cacheKey) as Media[];

    if (!cachedValue) {
      let entity = entityType;

      if (entityType == EntityType.Artist) {
        entity = `${EntityType.Album}, ${EntityType.Song}`;
      }

      const response = await axios.get(
        `${EnvironmentVariables.WEB_API_URI}?term=${encodeURI(
          term
        )}&entity=${encodeURI(entity)}`
      );

      if (response.status !== 200) {
        throw new WebApiException(500, "3rd party api exception...");
      }

      cachedValue = response.data.results as Media[];

      cacheUtil.set(cacheKey, cachedValue, 5000);
    }

    if (cachedValue.length > 0)
      return cachedValue.slice((page - 1) * pageSize, page * pageSize);

    return [];
  }
}

import express, { MediaType } from "express";
import { body, validationResult } from "express-validator";
import "reflect-metadata";
import { NextFunction } from "connect";
import MediaService from "../services/media-service";
import {
  SearchMediaDto,
  SearchMediaRespDto,
  SearchMediaReqDto,
} from "@next/models/lib/dto";

import { Media } from "@next/models/lib/entities";

class MediaController {
  private mediaService: MediaService;
  public router = express.Router();
  public path = "/search-media";

  constructor() {
    this.initializeRoutes();
    this.mediaService = new MediaService();
  }

  public initializeRoutes() {
    this.router.post(this.path, this.search);
  }

  search = async (
    request: express.Request,
    response: express.Response,
    next: NextFunction
  ) => {
    try {
      const { term, entityType, page } = request.body as SearchMediaReqDto;

      const mediaList: Media[] = await this.mediaService.search(
        term,
        entityType,
        page
      );

      const searchMediaRespDto: SearchMediaRespDto = [];

      for (const media of mediaList) {
        const {
          artistName,
          artistViewUrl,
          artworkUrl100,
          collectionCensoredName,
          collectionName,
          collectionPrice,
          collectionViewUrl,
          country,
          currency,
          kind,
          trackCensoredName,
          wrapperType,
        } = media;
        const searchMediaDto: SearchMediaDto = {
          artistName,
          artistViewUrl,
          artworkUrl100,
          collectionCensoredName,
          collectionName,
          collectionPrice,
          collectionViewUrl,
          country,
          currency,
          kind,
          trackCensoredName,
          wrapperType,
        };
        searchMediaRespDto.push(searchMediaDto);
      }

      console.log(searchMediaRespDto);

      response.send(searchMediaRespDto);
    } catch (err) {
      next(err);
    }
  };
}

export default MediaController;

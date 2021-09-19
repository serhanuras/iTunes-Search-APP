import { EntityType } from "../entities";

export interface ErrorType {
  message: string;
}

export class SearchMediaReqDto {
  term: string;
  entityType: EntityType;
  page: number;
}

export class SearchMediaDto {
  wrapperType: string;
  kind: string;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl100: string;
  collectionPrice: number;
  country: string;
  currency: string;
}

export type SearchMediaRespDto = SearchMediaDto[];

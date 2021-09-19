import { SearchMediaRespDto } from "../dto";
import { EntityType } from "../entities";

export enum FetchStatus {
  NONE = "NONE",
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
}

export interface MediaState {
  fetchStatus: FetchStatus;
  errorMessage?: string;
  rowCount: number;
  currentPage: number;
  data: SearchMediaRespDto;
  hasMore: boolean;
  entityType: EntityType;
  term: string;
}

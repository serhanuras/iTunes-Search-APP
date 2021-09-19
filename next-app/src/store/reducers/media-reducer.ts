/* eslint-disable no-param-reassign */
import produce from "immer";
import { SearchMediaRespDto, ErrorType } from "@next/models/lib/dto";
import { MediaState, FetchStatus } from "@next/models/lib/redux-types";
import { EntityType } from "@next/models/lib/entities";
import * as MediaAction from "../actions/media-action";

const modelInitialState: MediaState = {
  currentPage: 1,
  fetchStatus: FetchStatus.NONE,
  rowCount: 0,
  data: [],
  hasMore: false,
  entityType: EntityType.Artist,
  term: "",
};

const modelReducer = (state = modelInitialState, action: any): MediaState =>
  produce(state, (draft) => {
    switch (action.type) {
      case MediaAction.INIT_NEW_SEARCH: {
        draft.data = [];
        draft.hasMore = false;
        draft.currentPage = 1;
        draft.fetchStatus = FetchStatus.NONE;
        break;
      }

      case MediaAction.SEARCH_MEDIA_STARTED: {
        draft.fetchStatus = FetchStatus.LOADING;
        draft.entityType = action.entityType;
        draft.term = action.term;
        break;
      }

      case MediaAction.SEARCH_MEDIA_SUCCESS: {
        const searchMediaRespDto = action.payload as SearchMediaRespDto;

        draft.hasMore = false;
        if (searchMediaRespDto.length === 10) draft.hasMore = true;

        draft.data?.push(...searchMediaRespDto);
        draft.rowCount = searchMediaRespDto.length;
        draft.fetchStatus = FetchStatus.LOADED;
        draft.currentPage = action.requestDto.page;
        draft.entityType = action.requestDto.entityType;
        draft.term = action.requestDto.term;
        break;
      }

      case MediaAction.SEARCH_MEDIA_ERROR: {
        draft.errorMessage = (action.payload as ErrorType).message;
        draft.fetchStatus = FetchStatus.ERROR;
        break;
      }

      default: {
        break;
      }
    }
  });

export default modelReducer;

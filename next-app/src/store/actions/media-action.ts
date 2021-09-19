import axios from "axios";
import { SearchMediaReqDto, SearchMediaRespDto } from "@next/models/lib/dto";
import { ErrorType } from "@next/models/lib/dto";
import EnvironmentVariables from "../../utils/environment-variables";

export const INIT_NEW_SEARCH: string = "INIT_NEW_SEARCH";
export const initNewSearch = () => ({
  type: INIT_NEW_SEARCH,
});

export const searchMedia = (payload: SearchMediaReqDto) => {
  return (dispatch: Function) => {
    dispatch(searchMediaStarted());

    if (payload.page === 1) {
      dispatch(initNewSearch());
    }

    axios
      .post(`${EnvironmentVariables.WEB_API_URI}/search-media`, payload)
      .then((res) => {
        dispatch(searchMediaSuccess(res.data, payload));
      })
      .catch((err) => {
        dispatch(searchMediaError({ message: err.message }));
      });
  };
};

export const SEARCH_MEDIA_STARTED: string = "SEARCH_MEDIA_STARTED";
export const searchMediaStarted = () => ({
  type: SEARCH_MEDIA_STARTED,
});

export const SEARCH_MEDIA_SUCCESS: string = "SEARCH_MEDIA_SUCCESS";
export const searchMediaSuccess = (
  payload: { data: SearchMediaRespDto },
  requestDto: SearchMediaReqDto
) => ({
  type: SEARCH_MEDIA_SUCCESS,
  payload,
  requestDto,
});

export const SEARCH_MEDIA_ERROR: string = "SEARCH_MEDIA_ERROR";
export const searchMediaError = (payload: ErrorType) => ({
  type: SEARCH_MEDIA_ERROR,
  payload,
});

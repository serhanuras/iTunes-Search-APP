import { combineReducers } from "redux";
import { MediaState } from "@next/models/lib/redux-types";
import MediaReducer from "./media-reducer";

export interface GlobalState {
  mediaState: MediaState;
}

const rootReducer = combineReducers({
  mediaState: MediaReducer,
});

export default rootReducer;

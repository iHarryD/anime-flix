import { videoCardInterface } from "./video.interface";

export enum filterActionTypes {
  QUERY_SEARCH = "QUERY_SEARCH",
  SORT_BY_DATE = "SORT_BY_DATE",
  FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY",
  RESET = "RESET",
  POPULATE_LIST = "POPULATE_LIST",
}

export interface filterActions {
  type: filterActionTypes;
  payload?: { query: string; category: string; list: videoCardInterface[] };
}

export interface initialState {
  initial: videoCardInterface[];
  current: videoCardInterface[];
}

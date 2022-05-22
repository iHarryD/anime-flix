export enum filterActionTypes {
  QUERY_SEARCH = "QUERY_SEARCH",
  SORT_BY_DATE = "SORT_BY_DATE",
  FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY",
  RESET = "RESET",
}

export interface filterActions {
  type: filterActionTypes;
  payload?: { query: string; category: string };
}

export interface initialState {
  initial: any[];
  current: any[];
}

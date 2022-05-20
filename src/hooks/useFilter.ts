import { Reducer, useReducer } from "react";

enum filterTypes {
  QUERY_SEARCH = "QUERY_SEARCH",
  SORT_BY_DATE = "SORT_BY_DATE",
  FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY",
  RESET = "RESET",
}

interface filterActions {
  type: filterTypes;
  payload?: any;
}

interface initialState {
  initial: any[];
  current: any[];
}

export default function useFilter(initialList: []) {
  const [list, filterDispatcher] = useReducer<
    Reducer<initialState, filterActions>
  >(filterHandler, {
    initial: initialList,
    current: initialList,
  });

  function filterHandler(state: initialState, action: filterActions) {
    const { type, payload } = action;
    switch (type) {
      case filterTypes.QUERY_SEARCH:
        return {
          ...state,
          current: state.current.filter((item) =>
            new RegExp(payload.query, "gi").test(item?.title)
          ),
        };
      case filterTypes.FILTER_BY_CATEGORY:
        return {
          ...state,
          current: state.current.filter((item) =>
            item?.categories.includes(payload.categpry)
          ),
        };
      case filterTypes.RESET:
        return { ...state, current: state.initial };
      default:
        return state;
    }
  }
  return { list, filterDispatcher };
}

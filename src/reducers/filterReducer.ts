import {
  initialState,
  filterActions,
  filterActionTypes,
} from "../tsUtilities/filterTypes";

export default function filterReducer(
  state: initialState,
  action: filterActions
) {
  const { type, payload } = action;
  switch (type) {
    case filterActionTypes.QUERY_SEARCH:
      return {
        ...state,
        current: state.current.filter((item) =>
          new RegExp(payload?.query || "", "gi").test(item?.title)
        ),
      };
    case filterActionTypes.FILTER_BY_CATEGORY:
      return {
        ...state,
        current: state.current.filter((item) =>
          item?.categories.includes(payload?.category)
        ),
      };
    case filterActionTypes.RESET:
      return { ...state, current: state.initial };
    default:
      return state;
  }
}

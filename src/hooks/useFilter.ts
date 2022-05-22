import { Reducer, useReducer } from "react";
import filterReducer from "../reducers/filterReducer";
import { initialState, filterActions } from "../tsUtilities/filterTypes";

export default function useFilter(initialList: any[]) {
  const [list, filterDispatcher] = useReducer<
    Reducer<initialState, filterActions>
  >(filterReducer, {
    initial: initialList,
    current: initialList,
  });

  return { list, filterDispatcher };
}

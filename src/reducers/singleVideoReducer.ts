import { singleVideoDataInterface } from "../interfaces/singleVideo.interface";
import {
  singleVideoActions,
  singleVideoActionTypes,
} from "../interfaces/singleVideoReducer.interface";

export function singleVideoReducer(
  state: singleVideoDataInterface,
  action: singleVideoActions
) {
  const { type, payload } = action;
  switch (type) {
    case singleVideoActionTypes.LIKE:
      return {
        ...state,
        likes: [...state.likes, payload.userID],
        dislikes: state.dislikes.filter((id) => id !== payload.userID),
      };
    case singleVideoActionTypes.DISLIKE:
      return {
        ...state,
        dislikes: [...state.dislikes, payload.userID],
        likes: state.dislikes.filter((id) => id !== payload.userID),
      };
    case singleVideoActionTypes.REMOVE_LIKE:
      return {
        ...state,
        likes: state.likes.filter((id) => id !== payload.userID),
      };
    case singleVideoActionTypes.REMOVE_DISLIKE:
      return {
        ...state,
        dislikes: state.dislikes.filter((id) => id !== payload.userID),
      };
    case singleVideoActionTypes.INITIATE:
      return payload;
    default:
      return state;
  }
}

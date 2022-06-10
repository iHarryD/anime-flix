import { singleVideoDataInterface } from "./singleVideo.interface";

export enum singleVideoActionTypes {
  LIKE = "LIKE",
  DISLIKE = "DISLIKE",
  REMOVE_LIKE = "REMOVE_LIKE",
  REMOVE_DISLIKE = "REMOVE_DISLIKE",
  INITIATE = "INITIATE",
}

interface videoAction {
  type:
    | singleVideoActionTypes.LIKE
    | singleVideoActionTypes.DISLIKE
    | singleVideoActionTypes.REMOVE_LIKE
    | singleVideoActionTypes.REMOVE_DISLIKE;
  payload: {
    userID: string;
  };
}

interface initiateSingleVideoAction {
  type: singleVideoActionTypes.INITIATE;
  payload: singleVideoDataInterface;
}

export type singleVideoActions = videoAction | initiateSingleVideoAction;

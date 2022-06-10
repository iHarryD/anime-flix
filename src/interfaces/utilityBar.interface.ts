import { Dispatch } from "react";
import { singleVideoActions } from "./singleVideoReducer.interface";

export interface utilityBarProps {
  videoID: string;
  likes: string[];
  dislikes: string[];
  singleVideoReducer: Dispatch<singleVideoActions>;
}

import { Dispatch, SetStateAction } from "react";
import { videoCardInterface } from "./video.interface";

export interface videoContextInterface {
  allVideos: videoCardInterface[];
  setAllVideos: Dispatch<SetStateAction<videoCardInterface[]>>;
}

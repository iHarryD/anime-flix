import React from "react";
import { videoCardInterface } from "./video.interface";

export interface videoContextInterface {
  allVideos: videoCardInterface[];
  setAllVideos: React.Dispatch<React.SetStateAction<any>>;
}

import React, { createContext, useContext, useState } from "react";
import { videoCardInterface } from "../interfaces/video.interface";
import { videoContextInterface } from "../interfaces/videoContext.interface";

const VideosContext = createContext<videoContextInterface>(null!);

export function VideosProvider({ children }: { children: React.ReactNode }) {
  const [allVideos, setAllVideos] = useState<videoCardInterface[]>([]);

  return (
    <VideosContext.Provider value={{ allVideos, setAllVideos }}>
      {children}
    </VideosContext.Provider>
  );
}

export function useVideos() {
  return useContext(VideosContext);
}

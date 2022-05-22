import React, { createContext, useContext, useState, useEffect } from "react";
import { video } from "../interfaces/video.interface";
import baseAxiosInstance from "../services/baseAxiosInstance";

const VideosContext = createContext<videoContextInterface | null>(null);

export function VideosProvider({ children }: { children: React.ReactNode }) {
  const [allVideos, setAllVideos] = useState<
    { title: string; url: string; _id: string; data: string }[]
  >([]);

  useEffect(() => {
    (async () => {
      const res = await baseAxiosInstance().get("/video/fetch-all");
      setAllVideos(res.data);
    })();
  }, []);

  return (
    <VideosContext.Provider value={{ allVideos, setAllVideos }}>
      {children}
    </VideosContext.Provider>
  );
}

export function useVideos() {
  return useContext(VideosContext);
}

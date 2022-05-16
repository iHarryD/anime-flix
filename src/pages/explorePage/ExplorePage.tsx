import PageContainerMain from "../../components/pageContainer/PageContainer";
import { ExploreVideosContainer } from "../../components/styled/ExplorePage.styled";
import { VerticleVideoCard } from "../../components/videoCards/VideoCards";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function ExplorePage() {
  const [allVideos, setAllVideos] = useState<any[]>([]);
  const lastVideoRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://127.0.0.1:3001/api/video/fetch-all");
      setAllVideos(res.data);
    })();
  }, []);

  interface videoProp {
    url: string;
    title: string;
    _id: string;
    uploadedOn: Date;
  }

  return (
    <PageContainerMain>
      <ExploreVideosContainer>
        {allVideos.length > 0 &&
          allVideos.map(({ url, title, _id, uploadedOn }: videoProp, index) => {
            if (allVideos.length === index + 1) {
              return (
                <VerticleVideoCard
                  videoID={_id}
                  key={index}
                  url={url}
                  title={title}
                  uploadDate={uploadedOn}
                />
              );
            } else {
              return (
                <VerticleVideoCard
                  videoID={_id}
                  key={index}
                  url={url}
                  title={title}
                  uploadDate={uploadedOn}
                />
              );
            }
          })}
      </ExploreVideosContainer>
    </PageContainerMain>
  );
}

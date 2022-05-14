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
    uploadedOn: Date;
  }

  const observer = new IntersectionObserver(() => {});
  if (lastVideoRef !== null) {
    observer.observe(lastVideoRef.current);
  }

  return (
    <PageContainerMain>
      <ExploreVideosContainer>
        {allVideos.length > 0 &&
          allVideos.map(({ url, title, uploadedOn }: videoProp, index) => {
            if (allVideos.length === index + 1) {
              return (
                <VerticleVideoCard
                  ref={lastVideoRef}
                  key={index}
                  url={url}
                  title={title}
                  uploadDate={uploadedOn}
                />
              );
            } else {
              return (
                <VerticleVideoCard
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

import PageContainerMain from "../../components/pageContainer/PageContainer";
import { ExploreVideosContainer } from "../../components/styled/ExplorePage.styled";
import { VerticleVideoCard } from "../../components/videoCards/VideoCards";

import { useEffect, useState } from "react";
import baseAxiosInstance from "../../services/baseAxiosInstance";

export default function ExplorePage() {
  const [allVideos, setAllVideos] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const res = await baseAxiosInstance().get("/video/fetch-all");
      setAllVideos(res.data);
    })();
  }, []);

  interface videoProp {
    url: string;
    title: string;
    uploadedOn: Date;
  }
  return (
    <PageContainerMain>
      <ExploreVideosContainer>
        {allVideos.length > 0 &&
          allVideos.map(({ url, title, uploadedOn }: videoProp, index) => (
            <VerticleVideoCard
              key={index}
              url={url}
              title={title}
              uploadDate={uploadedOn}
            />
          ))}
      </ExploreVideosContainer>
    </PageContainerMain>
  );
}

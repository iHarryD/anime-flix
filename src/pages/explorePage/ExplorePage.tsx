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
    _id: string;
    uploadedOn: Date;
  }
  return (
    <PageContainerMain>
      <ExploreVideosContainer>
        {allVideos.length > 0 &&
          allVideos.map(({ url, title, _id, uploadedOn }: videoProp, index) => (
            <VerticleVideoCard
              key={index}
              url={url}
              title={title}
              videoID={_id}
              uploadDate={uploadedOn}
            />
          ))}
      </ExploreVideosContainer>
    </PageContainerMain>
  );
}

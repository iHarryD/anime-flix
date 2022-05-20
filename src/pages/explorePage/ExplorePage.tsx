import PageContainerMain from "../../components/pageContainer/PageContainer";
import { ExploreVideosContainer } from "../../components/styled/ExplorePage.styled";
import { VerticleVideoCard } from "../../components/videoCards/VideoCards";

import { useEffect, useState } from "react";
import baseAxiosInstance from "../../services/baseAxiosInstance";
import useFilter from "../../hooks/useFilter";

export default function ExplorePage() {
  const [allVideos, setAllVideos] = useState<[]>([]);
  const { list, filterDispatcher } = useFilter(allVideos);

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
        {list.current.length > 0 &&
          list.current.map(
            ({ url, title, _id, uploadedOn }: videoProp, index) => (
              <VerticleVideoCard
                key={index}
                url={url}
                title={title}
                videoID={_id}
                uploadDate={uploadedOn}
              />
            )
          )}
      </ExploreVideosContainer>
    </PageContainerMain>
  );
}

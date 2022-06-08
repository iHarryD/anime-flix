import PageContainerMain from "../../components/pageContainer/PageContainer";
import { ExploreVideosContainer } from "../../components/styled/ExplorePage.styled";
import { VerticleVideoCard } from "../../components/videoCards/VideoCards";
import { useVideos } from "../../contexts/VideosContext";
import { videoCardInterface } from "../../interfaces/video.interface";
import { VideoCardLoadingSkeleton } from "../../components/skeletonLoaders/SkeletonLoader";
import { useEffect, useState } from "react";
import { fetchAllVideos } from "../../services/videoServices";

export default function ExplorePage() {
  const { allVideos, setAllVideos } = useVideos();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (allVideos.length > 0) return;
    fetchAllVideos(setIsLoading, (result) => setAllVideos(result.data));
  }, []);

  return (
    <PageContainerMain>
      <ExploreVideosContainer>
        {isLoading
          ? Array.from(Array(10)).map((item, index) => (
              <VideoCardLoadingSkeleton key={index} />
            ))
          : allVideos.map(
              ({ url, title, _id, uploadedOn }: videoCardInterface) => (
                <VerticleVideoCard
                  key={_id}
                  url={url}
                  title={title}
                  _id={_id}
                  uploadedOn={uploadedOn}
                />
              )
            )}
      </ExploreVideosContainer>
    </PageContainerMain>
  );
}

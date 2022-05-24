import PageContainerMain from "../../components/pageContainer/PageContainer";
import { ExploreVideosContainer } from "../../components/styled/ExplorePage.styled";
import { VerticleVideoCard } from "../../components/videoCards/VideoCards";
import { useVideos } from "../../contexts/VideosContext";
import { videoCardInterface } from "../../interfaces/video.interface";
import { VideoCardLoadingSkeleton } from "../../components/skeletonLoaders/SkeletonLoader";
import { useEffect, useState } from "react";
import baseAxiosInstance from "../../services/baseAxiosInstance";

export default function ExplorePage() {
  const { allVideos, setAllVideos } = useVideos();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await baseAxiosInstance().get("/video/fetch-all");
        setAllVideos(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <PageContainerMain>
      <ExploreVideosContainer>
        {isLoading
          ? Array.from(Array(10)).map((item) => <VideoCardLoadingSkeleton />)
          : allVideos.map(
              (
                { url, title, _id, uploadedOn }: videoCardInterface,
                index: number
              ) => (
                <VerticleVideoCard
                  key={index}
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

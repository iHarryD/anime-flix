import PageContainerMain from "../../components/pageContainer/PageContainer";
import { ExploreVideosContainer } from "../../components/styled/ExplorePage.styled";
import { VerticleVideoCard } from "../../components/videoCards/VideoCards";
import useFilter from "../../hooks/useFilter";
import { useVideos } from "../../contexts/VideosContext";
import { videoCardInterface } from "../../interfaces/video.interface";

export default function ExplorePage() {
  const { allVideos } = useVideos();
  const { list, filterDispatcher } = useFilter(allVideos);
  return (
    <PageContainerMain>
      <ExploreVideosContainer>
        {list.current.length > 0 &&
          list.current.map(
            ({ url, title, _id, uploadedOn }: videoCardInterface, index) => (
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

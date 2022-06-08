import { useEffect, useState } from "react";
import EmptyPageTemplate from "../../components/emptyPageTemplate/EmptyPageTemplate";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import PageHeading from "../../components/pageHeading/PageHeading";
import { VideoCardLoadingSkeleton } from "../../components/skeletonLoaders/SkeletonLoader";
import { HistoryVideosContainer } from "../../components/styled/HistoryPageComponents.styled";
import { VerticleVideoCard } from "../../components/videoCards/VideoCards";
import { useUserData } from "../../contexts/UserDataContext";
import { userDataActionTypes } from "../../interfaces/userContext.interface";
import { videoCardInterface } from "../../interfaces/video.interface";
import {
  getWatchLater,
  getWatchLaterVideos,
} from "../../services/watchLaterServices";

export default function HistoryPage() {
  const { userData, userDataDispatcher } = useUserData();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allWatchLaterVideos, setAllWatchLaterVideos] = useState<
    videoCardInterface[] | null
  >(null);

  useEffect(() => {
    (async () => {
      if (userData.watchLater.length === 0) {
        await getWatchLater(setIsLoading, (result) =>
          userDataDispatcher({
            type: userDataActionTypes.POPULATE_WATCHLATER,
            payload: { updatedWatchLater: result.data },
          })
        );
      }
      getWatchLaterVideos(setIsLoading, (result) =>
        setAllWatchLaterVideos(result.data)
      );
    })();
  }, []);

  function toRender() {
    if (isLoading)
      return (
        <HistoryVideosContainer>
          {Array.from(Array(10)).map((item) => (
            <VideoCardLoadingSkeleton />
          ))}
        </HistoryVideosContainer>
      );
    if (allWatchLaterVideos?.length === 0) return <EmptyPageTemplate />;
    return (
      <HistoryVideosContainer>
        {allWatchLaterVideos &&
          allWatchLaterVideos.map(({ _id, url, uploadedOn, title }) => (
            <VerticleVideoCard
              _id={_id}
              url={url}
              title={title}
              uploadedOn={uploadedOn}
            />
          ))}
      </HistoryVideosContainer>
    );
  }

  return (
    <PageContainerMain>
      <PageHeading>Watch Later</PageHeading>
      {toRender()}
    </PageContainerMain>
  );
}

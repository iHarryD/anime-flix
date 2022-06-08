import { useEffect, useState } from "react";
import {
  EmptyPageTemplate,
  PageContainerMain,
  PageHeading,
  VerticleVideoCard,
  VideoCardLoadingSkeleton,
} from "../../components";
import { HistoryVideosContainer } from "../../styled";
import { useUserData } from "../../contexts";
import { userDataActionTypes, videoCardInterface } from "../../interfaces";
import { getWatchLater, getWatchLaterVideos } from "../../services";

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

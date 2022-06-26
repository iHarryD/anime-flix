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
import { toast } from "react-toastify";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";

export default function HistoryPage() {
  const { userData, userDataDispatcher } = useUserData();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allWatchLaterVideos, setAllWatchLaterVideos] = useState<
    videoCardInterface[] | null
  >(null);

  useEffect(() => {
    (async () => {
      if (userData.watchLater.length === 0) {
        getWatchLater(
          setIsLoading,
          (result) => {
            userDataDispatcher({
              type: userDataActionTypes.POPULATE_WATCHLATER,
              payload: { updatedWatchLater: result.data },
            });
            getWatchLaterVideos(
              setIsLoading,
              (result) => setAllWatchLaterVideos(result.data),
              (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
            );
          },
          (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
        );
      } else {
        getWatchLaterVideos(
          setIsLoading,
          (result) => setAllWatchLaterVideos(result.data),
          (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
        );
      }
    })();
  }, []);

  function toRender() {
    if (isLoading) {
      return (
        <HistoryVideosContainer>
          <VideoCardLoadingSkeleton />
        </HistoryVideosContainer>
      );
    } else if (allWatchLaterVideos?.length === 0) {
      return <EmptyPageTemplate />;
    } else {
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
  }

  return (
    <PageContainerMain>
      <PageHeading>Watch Later</PageHeading>
      {toRender()}
    </PageContainerMain>
  );
}

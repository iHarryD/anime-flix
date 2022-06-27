import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  EmptyPageTemplate,
  PageContainerMain,
  PageHeading,
  VerticleVideoCard,
  VideoCardLoadingSkeleton,
} from "../../components";
import { useUserData } from "../../contexts";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { userDataActionTypes, videoCardInterface } from "../../interfaces";
import { getAllHistoryVideos, getHistory } from "../../services";
import {
  HistoryHeadingButtonContainer,
  HistoryVideosContainer,
  IconOnlyButton,
} from "../../styled";

export default function HistoryPage() {
  const { userData, userDataDispatcher } = useUserData();
  const [allHistoryVideos, setAllHistoryVideos] = useState<
    videoCardInterface[] | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (userData.history.length === 0) {
      getHistory(
        setIsLoading,
        (result) => {
          userDataDispatcher({
            type: userDataActionTypes.POPULATE_HISTORY,
            payload: { updatedHistory: result.data },
          });
          if (result.data.length > 0) {
            getAllHistoryVideos(
              setIsLoading,
              (result) => setAllHistoryVideos(result.data),
              (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
            );
          }
        },
        (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
      );
    } else {
      getAllHistoryVideos(
        setIsLoading,
        (result) => setAllHistoryVideos(result.data),
        (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
      );
    }
  }, []);

  function toRender() {
    if (isLoading || allHistoryVideos === null) {
      return <VideoCardLoadingSkeleton />;
    } else if (allHistoryVideos.length === 0) {
      return <EmptyPageTemplate />;
    } else {
      return (
        <HistoryVideosContainer>
          {allHistoryVideos.map(({ title, uploadedOn, url, _id }) => (
            <VerticleVideoCard
              key={_id}
              _id={_id}
              title={title}
              uploadedOn={uploadedOn}
              url={url}
            />
          ))}
        </HistoryVideosContainer>
      );
    }
  }

  return (
    <PageContainerMain>
      <PageHeading>
        <HistoryHeadingButtonContainer>
          History
          <IconOnlyButton title="Clear history">
            <FontAwesomeIcon icon={faTrash} />
          </IconOnlyButton>
        </HistoryHeadingButtonContainer>
      </PageHeading>
      {toRender()}
    </PageContainerMain>
  );
}

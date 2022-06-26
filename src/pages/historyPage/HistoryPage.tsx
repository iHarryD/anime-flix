import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  PageContainerMain,
  PageHeading,
  VerticleVideoCard,
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
    videoCardInterface[]
  >([]);
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
    </PageContainerMain>
  );
}

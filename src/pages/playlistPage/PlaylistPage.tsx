import { useEffect, useState } from "react";
import {
  EmptyPageTemplate,
  PageContainerMain,
  PlaylistCard,
  PlaylistCardLoadingSkeleton,
} from "../../components";
import { ExploreVideosContainer } from "../../styled";
import { useUserData } from "../../contexts";
import { userDataActionTypes } from "../../interfaces";
import { getPlaylists } from "../../services";
import { toast, ToastContainer } from "react-toastify";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";

export default function PlaylistPage() {
  const { userData, userDataDispatcher } = useUserData();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (userData.playlists.length) return;
    getPlaylists(
      setIsLoading,
      (result) =>
        userDataDispatcher({
          type: userDataActionTypes.POPULATE_PLAYLIST,
          payload: { updatedPlaylist: result.data },
        }),
      (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
    );
  }, []);

  function toRender() {
    if (isLoading) {
      return (
        <ExploreVideosContainer>
          <PlaylistCardLoadingSkeleton />
        </ExploreVideosContainer>
      );
    } else if (userData.playlists.length === 0) {
      return <EmptyPageTemplate />;
    } else {
      return (
        <ExploreVideosContainer>
          {userData.playlists.map(({ name, videos, _id }) => (
            <PlaylistCard key={_id} name={name} videos={videos} _id={_id} />
          ))}
        </ExploreVideosContainer>
      );
    }
  }

  return (
    <PageContainerMain>
      <ToastContainer />
      {toRender()}
    </PageContainerMain>
  );
}

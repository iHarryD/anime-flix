import { useEffect, useState } from "react";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import PlaylistCard from "../../components/playlistCard/PlaylistCard";
import { PlaylistCardLoadingSkeleton } from "../../components/skeletonLoaders/SkeletonLoader";
import { ExploreVideosContainer } from "../../components/styled/ExplorePage.styled";
import { useUserData } from "../../contexts/UserDataContext";
import { userDataActionTypes } from "../../interfaces/userContext.interface";
import { getPlaylists } from "../../services/playlistServices";

export default function PlaylistPage() {
  const { userData, userDataDispatcher } = useUserData();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (userData.playlists.length) return;
    getPlaylists(setIsLoading, (result) =>
      userDataDispatcher({
        type: userDataActionTypes.POPULATE_PLAYLIST,
        payload: { updatedPlaylist: result.data },
      })
    );
  }, []);

  function toRender() {
    if (isLoading) {
      return Array.from(Array(10)).map((item, index) => (
        <PlaylistCardLoadingSkeleton key={index} />
      ));
    } else if (userData.playlists.length === 0) {
      return "You have no playlists.";
    } else {
      return userData.playlists.map(({ name, videos, _id }) => (
        <PlaylistCard key={_id} name={name} videos={videos} _id={_id} />
      ));
    }
  }

  return (
    <PageContainerMain>
      <ExploreVideosContainer>{toRender()}</ExploreVideosContainer>
    </PageContainerMain>
  );
}

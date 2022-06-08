import { useEffect, useState } from "react";
import EmptyPageTemplate from "../../components/emptyPageTemplate/EmptyPageTemplate";
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
      return (
        <ExploreVideosContainer>
          {Array.from(Array(10)).map((item, index) => (
            <PlaylistCardLoadingSkeleton key={index} />
          ))}
        </ExploreVideosContainer>
      );
    } else if (userData.playlists.length === 0) {
      return <EmptyPageTemplate />;
    } else {
      return userData.playlists.map(({ name, videos, _id }) => (
        <ExploreVideosContainer>
          <PlaylistCard key={_id} name={name} videos={videos} _id={_id} />
        </ExploreVideosContainer>
      ));
    }
  }

  return <PageContainerMain>{toRender()}</PageContainerMain>;
}

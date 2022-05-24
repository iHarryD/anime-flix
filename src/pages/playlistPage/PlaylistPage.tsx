import { useState } from "react";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import PlaylistCard from "../../components/playlistCard/PlaylistCard";
import { ExploreVideosContainer } from "../../components/styled/ExplorePage.styled";

export default function PlaylistPage() {
  const [allPlaylists, setAllPlaylists] = useState<any[]>([]);

  return (
    <PageContainerMain>
      <ExploreVideosContainer>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <PlaylistCard title={`Playlist ${item}`} itemCount={index} />
        ))}
      </ExploreVideosContainer>
    </PageContainerMain>
  );
}

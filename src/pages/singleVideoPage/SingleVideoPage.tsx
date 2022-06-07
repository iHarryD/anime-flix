import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import PlaylistModal from "../../components/playlistModal/PlaylistModal";
import SingleVideo from "../../components/singleVideo/SingleVideo";
import baseAxiosInstance from "../../services/baseAxiosInstance";

export default function SingleVideoPage() {
  const { userData } = useAuth();
  const { videoID } = useParams() as { videoID: string };
  const [videoData, setVideoData] = useState<any>(null);
  const [addingToPlaylist, setIsAddingToPlaylist] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const result = await baseAxiosInstance().get(
        `/video/fetch?videoID=${videoID}`
      );
      setVideoData(result.data);
    })();
  }, [videoID]);

  return videoData ? (
    <PageContainerMain>
      {addingToPlaylist && (
        <PlaylistModal
          videoID={videoID}
          closePlaylistModal={() => setIsAddingToPlaylist(false)}
        />
      )}
      <SingleVideo
        videoID={videoID}
        url={videoData.url}
        title={videoData.title}
        description={videoData.description}
        likeCount={videoData.likes.length}
        dislikeCount={videoData.dislikes.length}
        likeStatus={
          !!videoData.likes.find((userID: string) => userID === userData._id)
        }
        dislikeStatus={
          !!videoData.dislikes.find((userID: string) => userID === userData._id)
        }
        views={videoData.views}
        bookmarkStatus={false}
        uploadedOn={videoData.uploadedOn}
        playlistButtonHandler={() => setIsAddingToPlaylist(true)}
        channel="Channel"
      />
    </PageContainerMain>
  ) : (
    <h2>Loading</h2>
  );
}

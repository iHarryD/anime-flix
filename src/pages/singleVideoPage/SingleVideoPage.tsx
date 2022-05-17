import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import PlaylistModal from "../../components/playlistModal/PlaylistModal";
import SingleVideo from "../../components/singleVideo/SingleVideo";
import baseAxiosInstance from "../../services/baseAxiosInstance";

export default function SingleVideoPage() {
  const { videoID } = useParams();
  const [videoData, setVideoData] = useState<any>(null);

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
      {/* <PlaylistModal /> */}
      <SingleVideo
        url={videoData.url}
        title={videoData.title}
        description={videoData.description}
        likes={videoData.likes}
        dislikes={videoData.dislikes}
        views={videoData.views}
        playlists={[]}
        bookmarkStatus={false}
        uploadDate={videoData.uploadedOn}
        channel="Channel"
      />
    </PageContainerMain>
  ) : (
    <h2>Loading</h2>
  );
}

import { useEffect, useReducer, useState } from "react";
import { VideoUtilityBar, VideoDescription } from "../../components";
import { StyledSingleVideoContainer, VideoHeading } from "../../styled";
import { singleVideoReducer } from "../../reducers";
import { singleVideoActionTypes, userDataActionTypes } from "../../interfaces";
import { getPlaylists, getWatchLater, fetchVideo } from "../../services";
import { useUserData } from "../../contexts";

export function SingleVideo({ videoID }: { videoID: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userData, userDataDispatcher } = useUserData();
  const [videoData, videoDataDispatch] = useReducer(singleVideoReducer, null!);

  useEffect(() => {
    fetchVideo(videoID, setIsLoading, (result) =>
      videoDataDispatch({
        type: singleVideoActionTypes.INITIATE,
        payload: {
          title: result.data.title,
          likes: result.data.likes,
          dislikes: result.data.dislikes,
          url: result.data.url,
          views: result.data.views,
          videoID,
          uploadedOn: result.data.uploadedOn,
          channel: result.data.channel?.name,
        },
      })
    );
  }, [videoID]);

  useEffect(() => {
    if (userData.playlists.length) return;
    getPlaylists(undefined, (result) =>
      userDataDispatcher({
        type: userDataActionTypes.POPULATE_PLAYLIST,
        payload: { updatedPlaylist: result.data },
      })
    );
    if (userData.watchLater.length) return;
    getWatchLater(undefined, (result) =>
      userDataDispatcher({
        type: userDataActionTypes.POPULATE_WATCHLATER,
        payload: { updatedWatchLater: result.data },
      })
    );
  }, []);

  return isLoading || !videoData ? (
    <h1>Loading...</h1>
  ) : (
    <StyledSingleVideoContainer>
      <iframe src={videoData.url} title="none"></iframe>
      <div className="--verticle-flex --has-gap --has-padding">
        <VideoHeading>{videoData.title}</VideoHeading>
        <VideoUtilityBar
          videoID={videoID}
          likes={videoData.likes}
          dislikes={videoData.dislikes}
          singleVideoReducer={videoDataDispatch}
        />
        <VideoDescription
          views={videoData.views}
          uploadDate={videoData.uploadedOn}
          channel={videoData.channel}
          description={videoData.description}
        />
      </div>
    </StyledSingleVideoContainer>
  );
}

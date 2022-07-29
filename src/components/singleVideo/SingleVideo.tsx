import { useEffect, useReducer, useState } from "react";
import { VideoUtilityBar, VideoDescription } from "../../components";
import { StyledSingleVideoContainer, VideoHeading } from "../../styled";
import { singleVideoReducer } from "../../reducers";
import { singleVideoActionTypes, userDataActionTypes } from "../../interfaces";
import {
  getPlaylists,
  getWatchLater,
  fetchVideo,
  addToHistory,
} from "../../services";
import { useUserData, useAuth } from "../../contexts";
import { CommentsContainer } from "../commentsContainer/CommentsContainer";

export function SingleVideo({ videoID }: { videoID: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userData, userDataDispatcher } = useUserData();
  const [videoData, videoDataDispatch] = useReducer(singleVideoReducer, null!);
  const { userCredentials } = useAuth();

  useEffect(() => {
    fetchVideo(videoID, setIsLoading, (result) => {
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
          channel: result.data.uploadedBy.name,
        },
      });
      addToHistory(videoID);
    });
  }, [videoID]);

  useEffect(() => {
    if (userCredentials === null) return;
    if (userData.playlists.length === 0) {
      getPlaylists(undefined, (result) =>
        userDataDispatcher({
          type: userDataActionTypes.POPULATE_PLAYLIST,
          payload: { updatedPlaylist: result.data },
        })
      );
    }
    if (userData.watchLater.length === 0) {
      getWatchLater(undefined, (result) =>
        userDataDispatcher({
          type: userDataActionTypes.POPULATE_WATCHLATER,
          payload: { updatedWatchLater: result.data },
        })
      );
    }
  }, [userCredentials]);

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
        <CommentsContainer videoID={videoID} />
      </div>
    </StyledSingleVideoContainer>
  );
}

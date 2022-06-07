export interface utilityBarProps {
  videoID: string;
  likeCount: number;
  dislikeCount: number;
  likeStatus: boolean;
  dislikeStatus: boolean;
  watchLaterStatus: boolean;
  playlistButtonHandler: () => void;
}

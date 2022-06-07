export interface utilityBarProps {
  videoID: string;
  likeCount: number;
  dislikeCount: number;
  likeStatus: boolean;
  dislikeStatus: boolean;
  bookmarkStatus: boolean;
  playlistButtonHandler: () => void;
}

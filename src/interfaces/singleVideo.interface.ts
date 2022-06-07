export interface singleVideoProps {
  videoID: string;
  url: string;
  title: string;
  likeCount: number;
  dislikeCount: number;
  likeStatus: boolean;
  dislikeStatus: boolean;
  viewCount: number;
  uploadedOn: Date;
  bookmarkStatus: boolean;
  channel: string;
  description?: string;
  playlistButtonHandler: () => void;
}

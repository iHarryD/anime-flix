export interface singleVideoProps {
  url: string;
  title: string;
  likes: number;
  dislikes: number;
  views: number;
  uploadedOn: Date;
  bookmarkStatus: boolean;
  channel: string;
  description?: string;
  playlistButtonHandler: () => void;
  bookmarkButtonHandler: () => void;
}

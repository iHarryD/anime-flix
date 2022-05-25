export interface singleVideoProps {
  url: string;
  title: string;
  likes: number;
  dislikes: number;
  views: number;
  uploadDate: Date;
  playlists: object[];
  bookmarkStatus: boolean;
  channel: string;
  description?: string;
}

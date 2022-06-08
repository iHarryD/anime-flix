export interface singleVideoDataInterface {
  videoID: string;
  url: string;
  title: string;
  likes: string[];
  dislikes: string[];
  views: string[];
  uploadedOn: Date;
  channel: string;
  description?: string;
}

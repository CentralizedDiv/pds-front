import { Comment } from "./comment.model";
import { BaseEntity } from "./common.model";
import { Photo } from "./photo.model";
import { Photographer } from "./user.model";

export interface Album extends BaseEntity {
  name: string;
  photos: Photo[];
  comments: Comment[];
  photographer: Omit<Photographer, "albums">;
  cover: Omit<Photo, "album">;
  allowAdditionalPhotos: boolean;
  numberoOfcontractedPhotos: number;
  selectionDeadline: string;
  allowDownload: boolean;
  showWatermark: boolean;
}

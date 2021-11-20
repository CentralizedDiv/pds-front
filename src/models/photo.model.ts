import { Comment } from "./comment.model";
import { BaseEntity } from "./common.model";

export interface Photo extends BaseEntity {
  album: Photo;
  comments: Comment[];
  url: string;
  isSelected: boolean;
  isFavorite: boolean;
}

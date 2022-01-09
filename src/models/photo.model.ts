import { Album } from "./album.model";
import { Comment } from "./comment.model";
import { BaseEntity } from "./common.model";

export interface Photo extends BaseEntity {
  name: string;
  album: Omit<Album, "photos">;
  comments: Comment[];
  url: string;
  isSelected: boolean;
  isFavorite: boolean;
}

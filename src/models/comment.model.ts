import { Album } from "./album.model";
import { BaseEntity } from "./common.model";
import { Photo } from "./photo.model";
import { User } from "./user.model";

export interface Comment extends BaseEntity {
  content: string;
  photo: Omit<Photo, "comments">;
  album: Omit<Album, "comments">;
  createdBy: Omit<User, "comments">;
}

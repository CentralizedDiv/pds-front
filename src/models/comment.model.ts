import { Album } from "./album.model";
import { BaseEntity } from "./common.model";
import { Photo } from "./photo.model";

export interface Comment extends BaseEntity {
  content: string;
  photo: Photo;
  album: Album;
}

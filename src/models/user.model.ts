import { Album } from "./album.model";
import { Comment } from "./comment.model";
import { BaseEntity } from "./common.model";

export interface User extends BaseEntity {
  name: string;
  email: string;
  comments: Comment[];
}

export interface Photographer extends User {
  waterMarkUrl: string;
  albums: Album[];
}

export interface Customer extends User {}

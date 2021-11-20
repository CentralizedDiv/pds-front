import { Album } from "./album.model";
import { BaseEntity } from "./common.model";

interface User extends BaseEntity {
  name: string;
  email: string;
}

export interface Photographer extends User {
  waterMarkUrl: string;
  albums: Album[];
}

export interface Customer extends User {}

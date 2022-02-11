import { IUser } from '.';

export interface IUserFull extends IUser{
  roles: {
    id: number;
    name: string;
    alias: string;
  }[];
}

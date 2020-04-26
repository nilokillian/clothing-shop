import { IUser } from "../user/IUser";

export interface IHeader {
  currentUser: IUser | null;
}

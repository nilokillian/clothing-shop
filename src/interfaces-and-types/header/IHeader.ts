import { IUser } from "../user/IUser";

export interface IHeaderStateProps {
  currentUser: IUser | null;
  hidden: boolean;
}

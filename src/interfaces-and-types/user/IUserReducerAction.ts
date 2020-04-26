import { IUser } from "./IUser";
import { UserActionTypes } from "./IUserActionTypes";

export interface IUserReducerAction {
  type: UserActionTypes;
  payload: IUser;
}

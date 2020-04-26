import { IUser } from "../../interfaces-and-types/user/IUser";
import { IUserReducerAction } from "../../interfaces-and-types/user/IUserReducerAction";
import { UserActionTypes } from "../../interfaces-and-types/user/IUserActionTypes";

export const setCurrentUser = (user: IUser | null): IUserReducerAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

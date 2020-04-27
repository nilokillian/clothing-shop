import {
  IUser,
  IUserReducerAction,
  UserActionTypes,
} from "../../interfaces-and-types/user/IUser";

export const setCurrentUser = (user: IUser | null): IUserReducerAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

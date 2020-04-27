export enum UserActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

export interface IUserReducerAction {
  type: UserActionTypes;
  payload: IUser | null;
}

export interface IUser {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
  [others: string]: any;
}

export interface IUserState {
  currentUser: IUser | null;
}

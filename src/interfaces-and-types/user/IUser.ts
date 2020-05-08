export enum UserActionTypes {
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS = "EMAIL_SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "EMAIL_SIGN_IN_FAILURE",
  CHECK_USER_SESSION = "CHECK_USER_SESSION",
  SIGN_OUT_START = "SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
}
export type Credentials = {
  email: string;
  password: string;
};

type ISignOutStartAction = {
  type: UserActionTypes.SIGN_OUT_START;
};

type ISignOutSuccessAction = {
  type: UserActionTypes.SIGN_OUT_SUCCESS;
};
type ISignOutFailureAction = {
  type: UserActionTypes.SIGN_OUT_FAILURE;
  payload: string;
};

type IGoogleSignInStartAction = {
  type: UserActionTypes.GOOGLE_SIGN_IN_START;
};

export type IEmailSignInStartAction = {
  type: UserActionTypes.EMAIL_SIGN_IN_START;
  payload: Credentials;
};

type ISignInSuccessAction = {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: IUser | null;
};

type ISignInFailureAction = {
  type: UserActionTypes.SIGN_IN_FAILURE;
  payload: string | null;
};

type ICheckUserSessionAction = {
  type: UserActionTypes.CHECK_USER_SESSION;
};

export type IUserActions =
  | IGoogleSignInStartAction
  | ISignInSuccessAction
  | ISignInFailureAction
  | IEmailSignInStartAction
  | ICheckUserSessionAction
  | ISignOutStartAction
  | ISignOutSuccessAction
  | ISignOutFailureAction;

export interface IUser {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
  [others: string]: any;
}

export interface IUserState {
  currentUser: IUser | null;
  error: string | null;
}

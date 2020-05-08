import {
  IUser,
  UserActionTypes,
  IUserActions,
  Credentials,
} from "../../interfaces-and-types/user/IUser";

export const googleSignInStartAction = (): IUserActions => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStartAction = (
  credentials: Credentials
): IUserActions => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: credentials,
});

export const signInSuccessAction = (user: IUser | null): IUserActions => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailureAction = (errorMessage: string): IUserActions => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const checkUserSession = (): IUserActions => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStartAction = (): IUserActions => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccessAction = (): IUserActions => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailureAction = (errorMessage: string): IUserActions => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
});

import {
  IUserState,
  UserActionTypes,
  IUserActions,
} from "../../interfaces-and-types/user/IUser";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

export const userReducer = (
  state: IUserState = INITIAL_STATE,
  action: IUserActions
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

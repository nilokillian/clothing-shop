import {
  IUserState,
  IUserReducerAction,
  UserActionTypes,
} from "../../interfaces-and-types/user/IUser";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (
  state: IUserState = INITIAL_STATE,
  action: IUserReducerAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

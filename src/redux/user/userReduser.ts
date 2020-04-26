import { IUserState } from "../../interfaces-and-types/user/IUserState";
import { IUserReducerAction } from "../../interfaces-and-types/user/IUserReducerAction";
import { UserActionTypes } from "../../interfaces-and-types/user/IUserActionTypes";

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

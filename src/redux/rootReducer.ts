import { combineReducers } from "redux";
import { userReducer } from "./user/userReduser";
import { IUserState } from "../interfaces-and-types/user/IUserState";
import { IUserReducerAction } from "../interfaces-and-types/user/IUserReducerAction";

export interface ICombineReducers {
  user: (state: IUserState, action: IUserReducerAction) => IUserState;
}

export default combineReducers({
  user: userReducer,
});

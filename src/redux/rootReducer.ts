import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { IUserState } from "../interfaces-and-types/user/IUserState";
import { IUserReducerAction } from "../interfaces-and-types/user/IUserReducerAction";
import { testReducer } from "./test/testReducer";

export interface ICombineReducers {
  user: (state: IUserState, action: IUserReducerAction) => IUserState;
}

export default combineReducers({
  user: userReducer,
  test: testReducer,
});

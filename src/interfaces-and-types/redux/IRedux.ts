import { IUserState, IUserReducerAction } from "../user/IUser";
import { ICartState } from "../cart/ICart";

export interface IRoot {
  user: IUserState;
  cart: ICartState;
}

export interface ICombineReducers {
  user: (state: IUserState, action: IUserReducerAction) => IUserState;
  cart: () => ICartState;
}

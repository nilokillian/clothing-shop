import { IUserState } from "../user/IUser";
import { ICartState } from "../cart/ICart";
import { IDirectoryState } from "../directory/IDirectoryState";
import { IShopPageState } from "../shop-page/IShopPageState";

export interface IRoot {
  user: IUserState;
  cart: ICartState;
  directory: IDirectoryState;
  shop: IShopPageState;
}

// export interface ICombineReducers {
//   user: (state: IUserState, action: IUserReducerAction) => IUserState;
//   cart: () => ICartState;
// }

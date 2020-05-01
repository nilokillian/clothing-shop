import { IUserState } from "../user/IUser";
import { ICartState } from "../cart/ICart";
import { IDirectoryState } from "../directory/IDirectoryState";
import { ICollections } from "../collection/ICollection";

export interface IRoot {
  user: IUserState;
  cart: ICartState;
  directory: IDirectoryState;
  shop: ICollections;
}

// export interface ICombineReducers {
//   user: (state: IUserState, action: IUserReducerAction) => IUserState;
//   cart: () => ICartState;
// }

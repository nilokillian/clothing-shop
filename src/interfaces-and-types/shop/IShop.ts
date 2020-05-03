import { ICollection } from "../collection/ICollection";

export enum ShopActionTypes {
  UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS",
}

export interface IShopReducerAction {
  type: ShopActionTypes;
  payload?: { [key: string]: ICollection };
}

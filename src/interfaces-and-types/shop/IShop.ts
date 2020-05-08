import { ICollection } from "../collection/ICollection";

export enum ShopActionTypes {
  FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE ",
}

export interface IFetchCollectionStartAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_START;
}
export interface IFetchCollectionSuccessAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: { [key: string]: ICollection };
}

export interface IFetchCollectionFailureAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: string;
}

export type IShopActions =
  | IFetchCollectionStartAction
  | IFetchCollectionSuccessAction
  | IFetchCollectionFailureAction;

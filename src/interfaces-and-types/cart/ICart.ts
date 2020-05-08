import { IItemCollection } from "../collection/ICollection";

export interface ICartState {
  hidden: boolean;
  cartItems: IItemCollection[];
}

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

type IAddItemAction = {
  type: CartActionTypes.ADD_ITEM;
  payload: IItemCollection;
};

type IRemoveItemAction = {
  type: CartActionTypes.REMOVE_ITEM;
  payload: IItemCollection;
};

type IClearCartAction = {
  type: CartActionTypes.CLEAR_CART;
};

type IClearItemFromCartAction = {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: IItemCollection;
};

type IToggleCartHiddenAction = {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
};

export type ICartActions =
  | IClearCartAction
  | IClearItemFromCartAction
  | IToggleCartHiddenAction
  | IAddItemAction
  | IRemoveItemAction;

export interface ICartActionTypes {
  hidden: boolean;
}

export interface ICartIconStateToProps {
  toggleCartHidden: () => void;
  itemsCount: number;
}

export type ConnectedCartIconDispatchToProps = Pick<
  ICartIconStateToProps,
  "toggleCartHidden"
>;

import { IItemCollection } from "../collection/ICollection";

export interface ICartState {
  hidden: boolean;
  cartItems: IItemCollection[];
}

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM",
}

export interface ICartReducerAction {
  type: CartActionTypes;
  payload?: IItemCollection;
}

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

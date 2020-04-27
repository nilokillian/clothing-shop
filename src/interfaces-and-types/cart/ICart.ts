export interface ICartState {
  hidden: boolean;
}

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
}

export interface ICartReducerAction {
  type: CartActionTypes;
}

export interface ICartActionTypes {
  hidden: boolean;
}

export interface ICartIconStateToProps {
  toggleCartHidden: () => void;
}

export type ConnectedCartIconDispatchToProps = Pick<
  ICartIconStateToProps,
  "toggleCartHidden"
>;

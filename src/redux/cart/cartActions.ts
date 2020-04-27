import {
  CartActionTypes,
  ICartReducerAction,
} from "../../interfaces-and-types/cart/ICart";

export const toggleCartHidden = (): ICartReducerAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

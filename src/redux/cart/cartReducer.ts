import {
  ICartState,
  CartActionTypes,
  ICartReducerAction,
} from "../../interfaces-and-types/cart/ICart";
import { addItemToCart } from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (
  state: ICartState = INITIAL_STATE,
  action: ICartReducerAction
): ICartState => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload!),
      };

    default:
      return state;
  }
};

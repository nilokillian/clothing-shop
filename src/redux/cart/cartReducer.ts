import {
  ICartState,
  CartActionTypes,
  ICartReducerAction,
} from "../../interfaces-and-types/cart/ICart";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

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

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload!),
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload!.id
        ),
      };

    default:
      return state;
  }
};

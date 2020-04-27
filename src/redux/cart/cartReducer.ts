import {
  ICartState,
  CartActionTypes,
  ICartReducerAction,
} from "../../interfaces-and-types/cart/ICart";

const INITIAL_STATE = {
  hidden: false,
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

    default:
      return state;
  }
};

import { createSelector } from "reselect";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

const selectCart = (state: IRoot) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuatity, cartItem) => accumulatedQuatity + cartItem.quantity,
    0
  )
);

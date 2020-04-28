import { createSelector } from "reselect";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

const selectCart = (state: IRoot) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

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

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuatity, cartItem) =>
      accumulatedQuatity + cartItem.quantity * cartItem.price,
    0
  )
);

import {
  CartActionTypes,
  ICartActions,
} from "../../interfaces-and-types/cart/ICart";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";

export const toggleCartHidden = (): ICartActions => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItemCollection): ICartActions => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: IItemCollection): ICartActions => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: IItemCollection): ICartActions => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = (): ICartActions => ({
  type: CartActionTypes.CLEAR_CART,
});

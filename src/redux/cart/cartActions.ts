import {
  CartActionTypes,
  ICartReducerAction,
} from "../../interfaces-and-types/cart/ICart";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";

export const toggleCartHidden = (): ICartReducerAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItemCollection): ICartReducerAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

import { createSelector } from "reselect";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { IShopPageState } from "../../interfaces-and-types/shop-page/IShopPageState";

const selectShop = (state: IRoot): IShopPageState => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shopItems) => shopItems.collection
);

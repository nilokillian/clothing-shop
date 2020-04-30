import { SHOP_DATA } from "../../pages/shop-page/mockData";
import { IShopPageState } from "../../interfaces-and-types/shop-page/IShopPageState";

const INITIAL_STATE: IShopPageState = {
  collection: SHOP_DATA.collection,
};

export const shopReducer = (
  state = INITIAL_STATE,
  action: any
): IShopPageState => {
  switch (action.type) {
    default:
      return state;
  }
};

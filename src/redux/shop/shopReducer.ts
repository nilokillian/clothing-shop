// import { SHOP_DATA } from "../../pages/shop-page/mockData";
import {
  ShopActionTypes,
  IShopReducerAction,
} from "../../interfaces-and-types/shop/IShop";
import { ICollections } from "../../interfaces-and-types/collection/ICollection";

const INITIAL_STATE: ICollections = {
  collections: null,
};

export const shopReducer = (
  state = INITIAL_STATE,
  action: IShopReducerAction
): ICollections => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload!,
      };

    default:
      return state;
  }
};

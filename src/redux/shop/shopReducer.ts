import {
  ShopActionTypes,
  IShopActions,
} from "../../interfaces-and-types/shop/IShop";
import { ICollections } from "../../interfaces-and-types/collection/ICollection";

const INITIAL_STATE: ICollections = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const shopReducer = (
  state = INITIAL_STATE,
  action: IShopActions
): ICollections => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

import { SHOP_DATA } from "../../pages/shop-page/mockData";
import { ICollections } from "../../interfaces-and-types/collection/ICollection";

const INITIAL_STATE: ICollections = SHOP_DATA;

export const shopReducer = (
  state = INITIAL_STATE,
  action: any
): ICollections => {
  switch (action.type) {
    default:
      return state;
  }
};

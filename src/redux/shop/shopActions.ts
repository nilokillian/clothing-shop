import { ShopActionTypes } from "../../interfaces-and-types/shop/IShop";
import { ICollection } from "../../interfaces-and-types/collection/ICollection";

export const updateCollections = (collectionsMap: {
  [key: string]: ICollection;
}) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

import { createSelector } from "reselect";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { ICollections } from "../../interfaces-and-types/collection/ICollection";

const selectShop = (state: IRoot): ICollections => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

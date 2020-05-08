import {
  ShopActionTypes,
  IFetchCollectionStartAction,
  IFetchCollectionSuccessAction,
  IFetchCollectionFailureAction,
} from "../../interfaces-and-types/shop/IShop";
import { ICollection } from "../../interfaces-and-types/collection/ICollection";

export const fetchCollectionsStart = (): IFetchCollectionStartAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: {
  [key: string]: ICollection;
}): IFetchCollectionSuccessAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (
  errorMessage: string
): IFetchCollectionFailureAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch: Dispatch<IShopActions>) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then((snapShot) => {
//         const collectionsMap = converCollectionsSnapShotToMap(snapShot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error: Error) =>
//         dispatch(fetchCollectionsFailure(error.message))
//       );
//   };
// };

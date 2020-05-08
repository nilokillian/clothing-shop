import { takeLatest, call, put, all } from "redux-saga/effects";
import { ShopActionTypes } from "../../interfaces-and-types/shop/IShop";
import {
  firestore,
  converCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();

    const collectionsMap = yield call(converCollectionsSnapShotToMap, snapShot);

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export function* shopSagas() {
  yield all([onFetchCollectionsStart]);
}

import { all, put, takeLatest, call } from "redux-saga/effects";
import { clearCart } from "../cart/cartActions";
import { UserActionTypes } from "../../interfaces-and-types/user/IUser";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

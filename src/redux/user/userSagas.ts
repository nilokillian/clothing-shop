import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  UserActionTypes,
  IUser,
  IEmailSignInStartAction,
} from "../../interfaces-and-types/user/IUser";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInSuccessAction,
  signInFailureAction,
  signOutSuccessAction,
  signOutFailureAction,
} from "./userActions";

function* getSnapShotFromUserAuth(user: firebase.User | null) {
  try {
    const userRef:
      | firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
      | undefined = yield call(createUserProfileDocument, user);

    const userSnapShot: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> = yield userRef?.get();

    yield put(
      signInSuccessAction({
        id: userSnapShot.id,
        ...userSnapShot.data(),
      } as IUser)
    );
  } catch (error) {
    const { message } = error as Error;
    yield put(signInFailureAction(message));
  }
}

function* signInWithEmail({
  payload: { email, password },
}: IEmailSignInStartAction) {
  try {
    const userCredential: firebase.auth.UserCredential = yield auth.signInWithEmailAndPassword(
      email,
      password
    );

    yield call(getSnapShotFromUserAuth, userCredential.user);
  } catch (error) {
    const { message } = error as Error;
    yield put(signInFailureAction(message));
  }
}

function* signInWithGoogle() {
  try {
    const userCredential: firebase.auth.UserCredential = yield auth.signInWithPopup(
      googleProvider
    );

    yield call(getSnapShotFromUserAuth, userCredential.user);
  } catch (error) {
    const { message } = error as Error;
    yield put(signInFailureAction(message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    put(signInFailureAction(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccessAction());
  } catch (error) {
    yield put(signOutFailureAction(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}

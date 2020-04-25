import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzQeJISrO3rcRJJykiSdAvdh6kjEnr928",
  authDomain: "e-commerce-68839.firebaseapp.com",
  databaseURL: "https://e-commerce-68839.firebaseio.com",
  projectId: "e-commerce-68839",
  storageBucket: "e-commerce-68839.appspot.com",
  messagingSenderId: "60366083849",
  appId: "1:60366083849:web:5a4d17cf804a7a645265d8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

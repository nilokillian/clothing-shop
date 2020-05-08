import firebase, { User } from "firebase/app";

import "firebase/firebase-firestore";
import "firebase/auth";
import { ICollection } from "../interfaces-and-types/collection/ICollection";

const config = {
  apiKey: "AIzaSyAzQeJISrO3rcRJJykiSdAvdh6kjEnr928",
  authDomain: "e-commerce-68839.firebaseapp.com",
  databaseURL: "https://e-commerce-68839.firebaseio.com",
  projectId: "e-commerce-68839",
  storageBucket: "e-commerce-68839.appspot.com",
  messagingSenderId: "60366083849",
  appId: "1:60366083849:web:5a4d17cf804a7a645265d8",
};

export const createUserProfileDocument = async (
  user: User | null,
  additionalData?: any
) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date().toISOString();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("create user error :", error);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: Pick<ICollection, "title" | "items">[]
): Promise<void> => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((object) => {
    //gives new empty docRef and generates new id
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const converCollectionsSnapShotToMap = (
  collections: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title).toLowerCase(),
      title,
      items,
    } as ICollection;
  });

  return transformedCollection.reduce(
    (accumulator: { [key: string]: ICollection }, coolection) => {
      accumulator[coolection.title.toLowerCase()] = coolection;

      return accumulator;
    },
    {}
  );
};

export const getCurrentUser = (): Promise<firebase.User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscrube = auth.onAuthStateChanged((userAuth) => {
      unsubscrube();

      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

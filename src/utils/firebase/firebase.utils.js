import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {
  collection,
  writeBatch,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7pb9k6_SGN4SUMwehkVS0rwr_S8Roa2k",
  authDomain: "crwn-clothing-db-57727.firebaseapp.com",
  projectId: "crwn-clothing-db-57727",
  storageBucket: "crwn-clothing-db-57727.appspot.com",
  messagingSenderId: "151868383062",
  appId: "1:151868383062:web:16721ee5e4a065ca2240f7",
};
// Firebase Auth
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signUserUpWithEmailAndPassword = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signUserInWithEmailAndPassword = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

export const signUserInWithPopup = async () => {
  const response = await signInWithPopup(auth, provider);
  return response;
};

// Firestore Database
const db = getFirestore(app);

export const createUserDocumentFormAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        email: userAuth.email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCollectionAndDocument = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

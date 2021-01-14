import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5Y7IsLth2_Ho0QWmhwnCLVrOwbD3ncnI",
  authDomain: "petite-me.firebaseapp.com",
  databaseURL: "https://petite-me.firebaseio.com",
  projectId: "petite-me",
  storageBucket: "petite-me.appspot.com",
  messagingSenderId: "416728712699",
  appId: "1:416728712699:web:27f7cf72a56f066dd9375e",
  measurementId: "G-FRET9XYYG3"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//Initialize firestore/db
export const db = firebase.firestore();

//Initialize storage
const storage = firebase.storage();

export const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export const storageRef = storage.ref();

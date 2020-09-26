import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClsaVN-VgoUg6v2J6lFZXyJ0Cp-gKQtBM",
  authDomain: "clone-9f0c9.firebaseapp.com",
  databaseURL: "https://clone-9f0c9.firebaseio.com",
  projectId: "clone-9f0c9",
  storageBucket: "clone-9f0c9.appspot.com",
  messagingSenderId: "142991690",
  appId: "1:142991690:web:5d889c1b6531d81dd161b3",
  measurementId: "G-KRT4JFGKX9",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

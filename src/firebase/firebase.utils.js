import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCK3yW-d93wYPvnlOzCSmoEb_Oqwuawhic",
  authDomain: "crwn-db-99db7.firebaseapp.com",
  databaseURL: "https://crwn-db-99db7.firebaseio.com",
  projectId: "crwn-db-99db7",
  storageBucket: "crwn-db-99db7.appspot.com",
  messagingSenderId: "361306526501",
  appId: "1:361306526501:web:84371a01ae3ee1deb280cc",
  measurementId: "G-85HYD1D9BY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

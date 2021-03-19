import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCXOYuQiD7Pp5ZvV2IgvgfGgEes_5W77CY",
  authDomain: "yourshop-db.firebaseapp.com",
  projectId: "yourshop-db",
  storageBucket: "yourshop-db.appspot.com",
  messagingSenderId: "185169678889",
  appId: "1:185169678889:web:032ac9d62652fa3afd0238",
  measurementId: "G-5DS65ETEL4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

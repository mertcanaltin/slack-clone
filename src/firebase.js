import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhr3ggnj9FYygzLw3Ppk3WjyK2qT1NNWY",
  authDomain: "slack-clone-b71cb.firebaseapp.com",
  projectId: "slack-clone-b71cb",
  storageBucket: "slack-clone-b71cb.appspot.com",
  messagingSenderId: "1093530668887",
  appId: "1:1093530668887:web:2c9be4de0bcc13a359f812",
  measurementId: "G-WZRN5SVC9X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5VSJ2KC_FWUOg12Abp7pDfx23kLHeMfk",
  authDomain: "slack-clone-79ce3.firebaseapp.com",
  databaseURL: "https://slack-clone-79ce3.firebaseio.com",
  projectId: "slack-clone-79ce3",
  storageBucket: "slack-clone-79ce3.appspot.com",
  messagingSenderId: "545659839207",
  appId: "1:545659839207:web:78c3fe0b21ba6172ea7842",
  measurementId: "G-M6WJX3NE90",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

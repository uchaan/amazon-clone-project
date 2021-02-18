import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj8Icw2X-AJxOWwjpiZmXRuolH4HFCbV4",
  authDomain: "challenge-9df38.firebaseapp.com",
  projectId: "challenge-9df38",
  storageBucket: "challenge-9df38.appspot.com",
  messagingSenderId: "441562744248",
  appId: "1:441562744248:web:9963ebd47fe6ec27e33b4d",
  measurementId: "G-PTZ1EPWVYW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

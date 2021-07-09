import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA17XGAuu_2aoSjm2poOIeB8foO69M67Rw",
    authDomain: "clone-f3c3c.firebaseapp.com",
    projectId: "clone-f3c3c",
    storageBucket: "clone-f3c3c.appspot.com",
    messagingSenderId: "187813929484",
    appId: "1:187813929484:web:3113a7010be5653d63c429",
    measurementId: "G-Y0DLXNT30Z"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;
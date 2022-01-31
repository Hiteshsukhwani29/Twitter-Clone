// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJG1GzgEv5lkhGa09yrVChdVrr9irkcyM",
    authDomain: "twitter-clone-d2e75.firebaseapp.com",
    projectId: "twitter-clone-d2e75",
    storageBucket: "twitter-clone-d2e75.appspot.com",
    messagingSenderId: "40874887152",
    appId: "1:40874887152:web:749cafe1e2f6f730cf7f35",
    databaseURL: "https://twitter-clone-d2e75-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
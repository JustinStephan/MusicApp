import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWoX0wQYtq3PL__jMWOKvyZSftulFpWFI",
    authDomain: "youheard-984af.firebaseapp.com",
    databaseURL: "https://youheard-984af-default-rtdb.firebaseio.com",
    projectId: "youheard-984af",
    storageBucket: "youheard-984af.appspot.com",
    messagingSenderId: "53474080579",
    appId: "1:53474080579:web:ac30165d1e6d4a647661f6",
    measurementId: "G-MZXWE7RNLL"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
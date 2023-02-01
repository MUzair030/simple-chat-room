// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLeWGO5sGVix9tWnn7RhifYVh0UeepNCY",
    authDomain: "simple-chat-room-d5057.firebaseapp.com",
    projectId: "simple-chat-room-d5057",
    storageBucket: "simple-chat-room-d5057.appspot.com",
    messagingSenderId: "122569102450",
    appId: "1:122569102450:web:d27b41e1a895a61f03deeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

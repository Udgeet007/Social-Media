// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVrZYBhky2BB_LjOtO2ScnAKcGn8ZstcE",
  authDomain: "react-social-68190.firebaseapp.com",
  projectId: "react-social-68190",
  storageBucket: "react-social-68190.appspot.com",
  messagingSenderId: "687089576864",
  appId: "1:687089576864:web:2c61e0bd000b68bb0f92c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjlfa6_3iA0IjYx1p2J2au2UkPDTxhKXQ",
  authDomain: "netflix-clone-dee9e.firebaseapp.com",
  projectId: "netflix-clone-dee9e",
  storageBucket: "netflix-clone-dee9e.appspot.com",
  messagingSenderId: "193255492418",
  appId: "1:193255492418:web:31e79e1741bf24da6cd6db",
  measurementId: "G-1DGJMSP9XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

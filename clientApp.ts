// Import the functions you need from the SDKs you need
import { firestore } from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7UyFeSgQgkPOjINOFBkg0Xc1QfI_InmU",
  authDomain: "audiophile-2a5aa.firebaseapp.com",
  projectId: "audiophile-2a5aa",
  storageBucket: "audiophile-2a5aa.appspot.com",
  messagingSenderId: "987220267014",
  appId: "1:987220267014:web:060324f844a1998da83387",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };

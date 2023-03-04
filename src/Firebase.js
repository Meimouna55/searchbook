// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwnxXffhFLV7Cc8I0E8-yZ-OBv-boOSi4",
  authDomain: "booksearch-f63fe.firebaseapp.com",
  projectId: "booksearch-f63fe",
  storageBucket: "booksearch-f63fe.appspot.com",
  messagingSenderId: "121704134189",
  appId: "1:121704134189:web:fcd6d4a76eb3896234eaa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

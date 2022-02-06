import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAaB-8x_1Z7vEfeIPdXQWV62PXdQ3xWEOQ",
  authDomain: "matinogram.firebaseapp.com",
  projectId: "matinogram",
  storageBucket: "matinogram.appspot.com",
  messagingSenderId: "662889724860",
  appId: "1:662889724860:web:0ca11ea63c4c87a33209b9"
}).auth();

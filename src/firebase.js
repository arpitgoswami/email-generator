// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl1ClScZmSLxKFiybmwMF9Qq7KLdiVqvg",
  authDomain: "reactfirebase-f43b8.firebaseapp.com",
  projectId: "reactfirebase-f43b8",
  storageBucket: "reactfirebase-f43b8.firebasestorage.app",
  messagingSenderId: "1061604612002",
  appId: "1:1061604612002:web:517a0b03e18c17604cc4fb",
  measurementId: "G-Y74RT8HTXJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };

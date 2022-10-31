
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

// import auth

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBYNdF3QE58JX3B-dMPufKz36WSosuOMlA",
  authDomain: "ecommerce-project-63617.firebaseapp.com",
  projectId: "ecommerce-project-63617",
  storageBucket: "ecommerce-project-63617.appspot.com",
  messagingSenderId: "77410147941",
  appId: "1:77410147941:web:b90f3aedb8fe4729e1708c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// register user with firebase auth
export const registerUser = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}

// login user with firebase auth
export const loginUser = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

// logout user with firebase auth
export const logoutUser = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    alert('User signed out!');
  }).catch((error) => {
    alert('Something went wrong!');
    const errorCode = error.code;
    console.log(errorCode);
  });
}
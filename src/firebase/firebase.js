
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

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
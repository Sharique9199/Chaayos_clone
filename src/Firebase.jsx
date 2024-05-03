// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDXUjQ-iatEBFhIriOOQbvOxi8CQIBtPRo",
  authDomain: "chaayos-a7fce.firebaseapp.com",
  projectId: "chaayos-a7fce",
  storageBucket: "chaayos-a7fce.appspot.com",
  messagingSenderId: "319781283220",
  appId: "1:319781283220:web:37704a0c72ad51417bdb81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
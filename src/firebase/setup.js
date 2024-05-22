
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7oVscE0dk3ZuWiOzp8-kIgd9jWEZ2W0M",
  authDomain: "chayosclone.firebaseapp.com",
  projectId: "chayosclone",
  storageBucket: "chayosclone.appspot.com",
  messagingSenderId: "196964684227",
  appId: "1:196964684227:web:4bb0927f92fa556a12ed76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
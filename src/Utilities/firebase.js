// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//initailizing authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV97iDIWNfHCwUOU4l-VqWdkkW2kBQbb0",
  authDomain: "clone-2025-7f12b.firebaseapp.com",
  projectId: "clone-2025-7f12b",
  storageBucket: "clone-2025-7f12b.firebasestorage.app",
  messagingSenderId: "826672525241",
  appId: "1:826672525241:web:b9cfe615d0898dcb5a9068",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

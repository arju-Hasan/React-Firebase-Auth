// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwthSK9aOUKLBmvn6YyULi33oR7moBopE",
  authDomain: "react-firebase-auth-1bfb9.firebaseapp.com",
  projectId: "react-firebase-auth-1bfb9",
  storageBucket: "react-firebase-auth-1bfb9.firebasestorage.app",
  messagingSenderId: "776152683539",
  appId: "1:776152683539:web:a867c0732f5979f7cbdbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

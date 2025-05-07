// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV1jVceroId_Ug6qlmJ3lw7QiLSxEbvDM",
  authDomain: "fresh-harvest-6956c.firebaseapp.com",
  projectId: "fresh-harvest-6956c",
  storageBucket: "fresh-harvest-6956c.firebasestorage.app",
  messagingSenderId: "479283119658",
  appId: "1:479283119658:web:93b15057981a6bacc16553",
  measurementId: "G-Z9T0Q0HKVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
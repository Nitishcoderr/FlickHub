// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAnGzrLyahWOY2IHi-vj1vUXOHVIT1EKI",
  authDomain: "flickhub-d65d8.firebaseapp.com",
  projectId: "flickhub-d65d8",
  storageBucket: "flickhub-d65d8.appspot.com",
  messagingSenderId: "344380143506",
  appId: "1:344380143506:web:f630c9b97670407cd2b34b",
  measurementId: "G-L8TVM371JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_qCKTy0Qeb61R4kzggZ7fiZL0vHBWsec",
  authDomain: "react-firebase-chat-app-a7ca3.firebaseapp.com",
  projectId: "react-firebase-chat-app-a7ca3",
  storageBucket: "react-firebase-chat-app-a7ca3.appspot.com",
  messagingSenderId: "422800493309",
  appId: "1:422800493309:web:d3b14ec43fbc526f4e0c94",
  measurementId: "G-JGMY0HFVCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;





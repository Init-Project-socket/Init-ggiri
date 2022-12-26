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
  apiKey: "AIzaSyCqQSBw1xigcYAZ67iXjCFVwyHIfmmqtVs",
  authDomain: "init-project-socket.firebaseapp.com",
  projectId: "init-project-socket",
  storageBucket: "init-project-socket.appspot.com",
  messagingSenderId: "899549312247",
  appId: "1:899549312247:web:06074818b8a2850b850ff2",
  measurementId: "G-XR296SGV4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
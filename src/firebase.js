import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBuGr9ifYVH9tlRnyS2NW8KptoFA88UJrw",
    authDomain: "react-firebase-chat-app-35295.firebaseapp.com",
    projectId: "react-firebase-chat-app-35295",
    storageBucket: "react-firebase-chat-app-35295.appspot.com",
    messagingSenderId: "883191757368",
    appId: "1:883191757368:web:94da728375389b332d84cd",
    measurementId: "G-E5FW4R8M8E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
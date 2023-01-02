import firebase from 'firebase/compat/app';
import "firebase/auth";     // 인증 관련
import "firebase/database"; // DB 관련
import "firebase/storage";  // 스토리지 관련

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqQSBw1xigcYAZ67iXjCFVwyHIfmmqtVs",
    authDomain: "init-project-socket.firebaseapp.com",
    databaseURL: "https://init-project-socket-default-rtdb.firebaseio.com",
    projectId: "init-project-socket",
    storageBucket: "init-project-socket.appspot.com",
    messagingSenderId: "899549312247",
    appId: "1:899549312247:web:06074818b8a2850b850ff2",
    measurementId: "G-XR296SGV4J"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


export default firebase;
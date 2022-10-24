// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCupgJrxeanOShTCOp4dtd547OK49tES58",
    authDomain: "e-learning-365.firebaseapp.com",
    projectId: "e-learning-365",
    storageBucket: "e-learning-365.appspot.com",
    messagingSenderId: "76700308799",
    appId: "1:76700308799:web:08506e32c2611567a4ef8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
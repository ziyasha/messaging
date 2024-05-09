// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByTr2GOllJjI57gE3LKTm87lKbFbwTXOo",
  authDomain: "tabe-7e8f2.firebaseapp.com",
  projectId: "tabe-7e8f2",
  storageBucket: "tabe-7e8f2.appspot.com",
  messagingSenderId: "412925047025",
  appId: "1:412925047025:web:1ea2408d2b1a8746f1b950",
  measurementId: "G-DWEL0NLE16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
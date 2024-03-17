// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv4msHRIPO2hXa5OHezdKwlSIF0W68A0M",
  authDomain: "dhinahemat.firebaseapp.com",
  projectId: "dhinahemat",
  storageBucket: "dhinahemat.appspot.com",
  messagingSenderId: "509620617453",
  appId: "1:509620617453:web:5057186439118431d28ce4",
  measurementId: "G-0JYFRLMPDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db};
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmOOapiQNhr_7Fn51pKZ0XM6UHpFNFgb4",
  authDomain: "messy-912b2.firebaseapp.com",
  projectId: "messy-912b2",
  storageBucket: "messy-912b2.appspot.com",
  messagingSenderId: "442680349408",
  appId: "1:442680349408:web:5d80ce6afd092820af7685",
  measurementId: "G-39Z9M7WMXS"
};

// Initialize Firebase
if(firebase.getApps.length==0){
    const app = initializeApp(firebaseConfig);
}
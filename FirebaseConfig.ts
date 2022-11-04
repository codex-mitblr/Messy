import {initializeApp} from 'firebase/app'; 
import {getAuth} from 'firebase/auth';
import firebase from 'firebase/compat/app';
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
if(firebase.apps.length==0){
  const app = firebase.initializeApp(firebaseConfig);
}
const auth = getAuth();


export {firebase}
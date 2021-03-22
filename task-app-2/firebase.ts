import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
// import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBP38VM4pAFEekeTeUBtC6JIGWXPlbFvDc',
  authDomain: 'task-app-2.firebaseapp.com',
  databaseURL: 'https://task-app-2.firebaseio.com',
  projectId: 'task-app-2',
  storageBucket: 'task-app-2.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:396876656793:ios:c252654dc326f532834808',
  measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig, "TaskApp");
} else {
    firebase.app("TaskApp");
}
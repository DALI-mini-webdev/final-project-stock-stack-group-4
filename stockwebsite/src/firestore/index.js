import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({

    apiKey: "AIzaSyC0ZAEGDyb_w9GQ25GJe8TG_ILSK5q4OmU",
    authDomain: "stockproject-4b4e7.firebaseapp.com",
    projectId: "stockproject-4b4e7",
    storageBucket: "stockproject-4b4e7.appspot.com",
    messagingSenderId: "337243665853",
    appId: "1:337243665853:web:442310949cca5838aa8ed4",
    measurementId: "G-LLC3SRPN61"
});


const db = firebase.firestore();


export default {
  firebase, db
}
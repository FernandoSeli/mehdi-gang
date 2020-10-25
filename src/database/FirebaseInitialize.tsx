import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAw-6IhC9zkdSehvdnoIvqqUx2JRSI26fQ",
    authDomain: "gym-progression.firebaseapp.com",
    databaseURL: "https://gym-progression.firebaseio.com",
    projectId: "gym-progression",
    storageBucket: "gym-progression.appspot.com",
    messagingSenderId: "896362322645",
    appId: "1:896362322645:web:91303ae317a163f1d9a05c",
    measurementId: "G-9DVRELTFV5"
};

export default firebaseConfig;

// firebase.initializeApp(firebaseConfig);

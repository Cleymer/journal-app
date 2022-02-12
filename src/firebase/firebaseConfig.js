import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCymU-OsPVR5tJ0N62lpMlo82EhtXk_32w",
    authDomain: "react-project-web-journal.firebaseapp.com",
    projectId: "react-project-web-journal",
    storageBucket: "react-project-web-journal.appspot.com",
    messagingSenderId: "1086986386137",
    appId: "1:1086986386137:web:6db3b95fd7ee21c5125cc8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    db,
    googleAuthProvider
}

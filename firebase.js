// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkSVBLllSp1N3lmGBZhMTeRXx1ipcA0iU",
    authDomain: "cypher-552dc.firebaseapp.com",
    projectId: "cypher-552dc",
    storageBucket: "cypher-552dc.appspot.com",
    messagingSenderId: "994139547522",
    appId: "1:994139547522:web:a3881ea8bc456b61a9d19b",
    measurementId: "G-96QY2C7BCN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider}
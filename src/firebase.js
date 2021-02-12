import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVy9KNowC4XaY_FxstlzU-8_PGJwUHXXo",
    authDomain: "joy-td.firebaseapp.com",
    projectId: "joy-td",
    storageBucket: "joy-td.appspot.com",
    messagingSenderId: "637683983059",
    appId: "1:637683983059:web:26f9e92f51690ec7786a26",
    measurementId: "G-VXJ4K4GTXT"
});

const db = firebaseApp.firestore();
//const auth = firebase.auth();

export default db;
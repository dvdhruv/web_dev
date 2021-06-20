import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
    apiKey: "AIzaSyCzJYY4VSHPJlwnbS8uHrwaQ7iCeSGunCk",
    authDomain: "helpnow-task.firebaseapp.com",
    projectId: "helpnow-task",
    storageBucket: "helpnow-task.appspot.com",
    messagingSenderId: "111278959087",
    appId: "1:111278959087:web:7573a24f67b5892070ae1a",
    measurementId: "G-HQR9Z4TSCT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

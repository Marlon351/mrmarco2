import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAQv68UlMUJyZ-JzpSZfAJJ89x8EXTI8_k",
    authDomain: "mrmarco-19768.firebaseapp.com",
    projectId: "mrmarco-19768",
    storageBucket: "mrmarco-19768.appspot.com",
    messagingSenderId: "78544652596",
    appId: "1:78544652596:web:1a25ba2e11aa22f07bfd61",
    measurementId: "G-GGRRBGWXP4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();

export {storage};
export default db;

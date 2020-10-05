import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9wnOEu9oshbU3qOUTNxKhGvcoLJFSVfI",
    authDomain: "clone-873a9.firebaseapp.com",
    databaseURL: "https://clone-873a9.firebaseio.com",
    projectId: "clone-873a9",
    storageBucket: "clone-873a9.appspot.com",
    messagingSenderId: "1055116557904",
    appId: "1:1055116557904:web:77fc13305428c642ac5b55",
    measurementId: "G-JFDTLV7WVN"
});

const auth = firebase.auth();

export { auth };
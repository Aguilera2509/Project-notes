var firebaseConfig = {
    apiKey: "AIzaSyAYwdRmQCwBUioItTIHa6bLeQy-0wMn81c",
    authDomain: "jose-notas.firebaseapp.com",
    projectId: "jose-notas",
    storageBucket: "jose-notas.appspot.com",
    messagingSenderId: "3574248912",
    appId: "1:3574248912:web:84ce3e8d6a9e37ac1f35d5",
    measurementId: "G-1FXBGRWEDJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
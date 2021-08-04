import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGTFFsIw2AFgewMBD85sH9TahzWBEEzCE",
    authDomain: "tick-tok-clone-d83e8.firebaseapp.com",
    projectId: "tick-tok-clone-d83e8",
    storageBucket: "tick-tok-clone-d83e8.appspot.com",
    messagingSenderId: "513289900722",
    appId: "1:513289900722:web:8dce182dd3bfbc19082fab",
    measurementId: "G-W55RBMQZ6Z"
};

const  db = firebaseConfig.firestore();

export {db};
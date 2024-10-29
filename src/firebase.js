// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBlQOYIwiGKUsqBdTv4h3tV4Pyy4J5Qpsk",
    authDomain: "planya-40cb9.firebaseapp.com",
    projectId: "planya-40cb9",
    storageBucket: "planya-40cb9.appspot.com",
    messagingSenderId: "96271774061",
    appId: "1:96271774061:web:007fd591831088a12a2a64",
    measurementId: "G-7XQ4DJJNH9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
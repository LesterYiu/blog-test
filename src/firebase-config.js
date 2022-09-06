import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcWZohuNl_QoIFq2F2QTSjgTNhba9aqTk",
    authDomain: "blog-app-b60f5.firebaseapp.com",
    projectId: "blog-app-b60f5",
    storageBucket: "blog-app-b60f5.appspot.com",
    messagingSenderId: "69566217279",
    appId: "1:69566217279:web:b26ea3b652ecdb4042cc8a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;
export const db = getFirestore(app);
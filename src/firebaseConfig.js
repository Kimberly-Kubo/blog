// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs0MBWgSZ30CeuN4MVnEpupk0wL_Hlmz4",
    authDomain: "blog-3c901.firebaseapp.com",
    projectId: "blog-3c901",
    storageBucket: "blog-3c901.appspot.com",
    messagingSenderId: "488944135112",
    appId: "1:488944135112:web:0e62d80d991acfb70b2efd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
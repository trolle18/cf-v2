// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ9NaRQIuOeubtXZHDFXJbhmryzIjUjqE",
  authDomain: "hop-d22.firebaseapp.com",
  projectId: "hop-d22",
  storageBucket: "hop-d22.appspot.com",
  messagingSenderId: "928797374220",
  appId: "1:928797374220:web:71aaf045b4392fa692fb29",
  measurementId: "G-3VDNTRLVYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export const auth = getAuth(app);
export const homepageRef = collection(db, "homepage");
export const usersRef = collection(db, "users");

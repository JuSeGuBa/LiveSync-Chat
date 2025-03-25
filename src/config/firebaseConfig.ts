// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOTExDZQFqbWWRouUChoSciLYA7Y9078Y",
  authDomain: "livesyncchat.firebaseapp.com",
  projectId: "livesyncchat",
  storageBucket: "livesyncchat.firebasestorage.app",
  messagingSenderId: "434753839514",
  appId: "1:434753839514:web:cf28749ccd2879ef4d5a23",
  measurementId: "G-EZP843WL6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// console.log("🔥 Firebase inicializado correctamente:", app);

export default app;

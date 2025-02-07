// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogging-application-af16b.firebaseapp.com",
  projectId: "blogging-application-af16b",
  storageBucket: "blogging-application-af16b.firebasestorage.app",
  messagingSenderId: "861513710087",
  appId: "1:861513710087:web:8073bd87a5afae3d2948a2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

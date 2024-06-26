// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-2ecb5.firebaseapp.com",
  projectId: "mern-blog-app-2ecb5",
  storageBucket: "mern-blog-app-2ecb5.appspot.com",
  messagingSenderId: "1000090171108",
  appId: "1:1000090171108:web:2fc007d99bb9e232281ef1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
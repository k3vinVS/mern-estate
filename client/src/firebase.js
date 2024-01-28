// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f4754.firebaseapp.com",
  projectId: "mern-estate-f4754",
  storageBucket: "mern-estate-f4754.appspot.com",
  messagingSenderId: "673574263456",
  appId: "1:673574263456:web:13030683c7189c542f07c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-50190.firebaseapp.com",
  projectId: "interviewiq-50190",
  storageBucket: "interviewiq-50190.firebasestorage.app",
  messagingSenderId: "613527874691",
  appId: "1:613527874691:web:03f28cc8e6abd064803fb6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth,provider}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASG4Ekrm2qSDA-g2EhsaH7_ALB0rq7Opw",
  authDomain: "user-login-1b401.firebaseapp.com",
  projectId: "user-login-1b401",
  storageBucket: "user-login-1b401.appspot.com",
  messagingSenderId: "202219813757",
  appId: "1:202219813757:web:86cc3ee9cf2f6ec299ea14",
  measurementId: "G-50Y051YX5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

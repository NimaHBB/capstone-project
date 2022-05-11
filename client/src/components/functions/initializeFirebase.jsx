import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAvSPs7BVhjigh3sfdqJoNmLHxp9ZN1VwE",
  authDomain: "nittoshop-3c4e4.firebaseapp.com",
  databaseURL:
    "https://nittoshop-3c4e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nittoshop-3c4e4",
  storageBucket: "nittoshop-3c4e4.appspot.com",
  messagingSenderId: "935064541626",
  appId: "1:935064541626:web:1883c0c6831891a4e3e583",
  measurementId: "G-MPX3LT1SCG",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

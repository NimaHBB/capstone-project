import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvSPs7BVhjigh3sfdqJoNmLHxp9ZN1VwE",
  authDomain: "nittoshop-3c4e4.firebaseapp.com",
  databaseURL: "https://nittoshop-3c4e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nittoshop-3c4e4",
  storageBucket: "nittoshop-3c4e4.appspot.com",
  messagingSenderId: "935064541626",
  appId: "1:935064541626:web:1883c0c6831891a4e3e583",
  measurementId: "G-MPX3LT1SCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

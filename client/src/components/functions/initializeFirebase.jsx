import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import "dotenv/config"
// let { APIKEY } = process.env;
// let { AUTHDOMAIN } = process.env;
// let { DATABASEURL } = process.env;
// let { PROJECTID } = process.env;
// let { STORAGEBUCKET } = process.env;
// let { MESSAGINGSENDERID } = process.env;
// let { APPID } = process.env;
// let { MEASUREMENTID } =process.env;
// fetch("/settings")
//   .then((res) => res.json())
//   .then((data) => {
//     // setCategories(data);
//     console.log(data)
//     APIKEY=data.APIKEY
//     AUTHDOMAIN=data.AUTHDOMAIN
//     DATABASEURL=data.DATABASEURL
//     PROJECTID=data.PROJECTID
//     STORAGEBUCKET=data.STORAGEBUCKET
//     MESSAGINGSENDERID=data.MESSAGINGSENDERID
//     APPID=data.APPID
//     MEASUREMENTID=data.MEASUREMENTID
//       });

const firebaseConfig = {
  // apiKey:  APIKEY,
  // authDomain: AUTHDOMAIN,
  // databaseURL: DATABASEURL,
  // projectId: PROJECTID,
  // storageBucket: STORAGEBUCKET,
  // messagingSenderId: MESSAGINGSENDERID,
  // appId: APPID,
  // measurementId: MEASUREMENTID,

  apiKey: "AIzaSyAvSPs7BVhjigh3sfdqJoNmLHxp9ZN1VwE",
  authDomain: "nittoshop-3c4e4.firebaseapp.com",
  databaseURL:
    "https://nittoshop-3c4e4-default-rtdb.europe-west1.firebasedatabase.app",
  PROJECTID: "nittoshop-3c4e4",
  projectId: "nittoshop-3c4e4.appspot.com",
  storageBucket: "935064541626",
  appId: "1:935064541626:web:1883c0c6831891a4e3e583",
  measurementId: "G-MPX3LT1SCG",
};
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
export const analytics = getAnalytics(appFirebase);

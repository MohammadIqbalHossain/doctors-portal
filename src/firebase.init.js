// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBeCu4erYREFQ55sSVBV-rHBYZN7GYdmCk",
//   authDomain: "doctors-portal-e9e57.firebaseapp.com",
//   projectId: "doctors-portal-e9e57",
//   storageBucket: "doctors-portal-e9e57.appspot.com",
//   messagingSenderId: "402783503271",
//   appId: "1:402783503271:web:43b17cde1aed41d8c32c82",
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_apiKey,
  //   authDomain: process.env.REACT_APP_authDomain,
  //   projectId: process.env.REACT_APP_projectId,
  //   storageBucket: process.env.REACT_APP_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
  //   appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyCT6iTbCJRiRv3xBfQHYtX7AbF8d_8E2LE",
  authDomain: "doctors-portal-2b2e9.firebaseapp.com",
  projectId: "doctors-portal-2b2e9",
  storageBucket: "doctors-portal-2b2e9.appspot.com",
  messagingSenderId: "408979623468",
  appId: "1:408979623468:web:13c0b29d2d6144903ecb89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

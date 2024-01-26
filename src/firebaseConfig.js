// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDEu81e416yM8XaaTtn45S4Fb0yva7u_E",
  authDomain: "readersden-fe0f1.firebaseapp.com",
  projectId: "readersden-fe0f1",
  storageBucket: "readersden-fe0f1.appspot.com",
  messagingSenderId: "504657644461",
  appId: "1:504657644461:web:82ab0996c41829decbef24",
  measurementId: "G-2NXQZMX1T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);

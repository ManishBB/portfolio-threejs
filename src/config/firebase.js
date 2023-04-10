// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaKcApnmYM4FCKlP9eiS6KyTlxAa4F05M",
  authDomain: "portfolio-cc510.firebaseapp.com",
  projectId: "portfolio-cc510",
  storageBucket: "portfolio-cc510.appspot.com",
  messagingSenderId: "618406165566",
  appId: "1:618406165566:web:f9d0a91ce24e972d79256f",
  measurementId: "G-1PKJHLG825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
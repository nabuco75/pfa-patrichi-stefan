import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBBnAPhaHDh545Bx_dMcCzBymRqjrgSouQ",
  authDomain: "patrichi-a-stefan-pfa.firebaseapp.com",
  databaseURL: "https://patrichi-a-stefan-pfa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "patrichi-a-stefan-pfa",
  storageBucket: "patrichi-a-stefan-pfa.appspot.com",
  messagingSenderId: "155741019224",
  appId: "1:155741019224:web:def806d9c3750d29fb7e2d",
  measurementId: "G-6L6L3G7N7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

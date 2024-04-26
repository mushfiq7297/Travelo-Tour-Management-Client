// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-5mHqHH9K1Bov4xFavivnzd8D9o1Jx0w",
  authDomain: "tour-management-website.firebaseapp.com",
  projectId: "tour-management-website",
  storageBucket: "tour-management-website.appspot.com",
  messagingSenderId: "834636351764",
  appId: "1:834636351764:web:674b1611aaf459ec3c5a01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
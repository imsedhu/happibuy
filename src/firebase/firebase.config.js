// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcSr7OwYvWiTUDSaZfL-toyzDxG0WRw3k",
  authDomain: "happibuy-react.firebaseapp.com",
  projectId: "happibuy-react",
  storageBucket: "happibuy-react.appspot.com",
  messagingSenderId: "782253997605",
  appId: "1:782253997605:web:45d4663e435c4c9cb589cc",
  measurementId: "G-PPZFJM9JHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
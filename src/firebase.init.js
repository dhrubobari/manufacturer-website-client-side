// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//  Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv2uJUiGCNvdksEXe73efzKF83Gc4yQ4o",
  authDomain: "shapemaster-manufacture.firebaseapp.com",
  projectId: "shapemaster-manufacture",
  storageBucket: "shapemaster-manufacture.appspot.com",
  messagingSenderId: "800619223288",
  appId: "1:800619223288:web:6963d42f28f5b94ba9030d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
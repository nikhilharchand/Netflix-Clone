import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXPz-UEpg9UYie-ZzJk2empbOIbb_2OFU",
  authDomain: "netflix-clone-52cc7.firebaseapp.com",
  projectId: "netflix-clone-52cc7",
  storageBucket: "netflix-clone-52cc7.appspot.com",
  messagingSenderId: "336397138267",
  appId: "1:336397138267:web:caa00ff0e70c6124f8027e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth , db };

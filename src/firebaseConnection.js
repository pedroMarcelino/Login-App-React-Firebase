import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrcKTpzjsAZPOq_8dLnZ0dKpGSVmgNFQA",
  authDomain: "curso-reactudemy.firebaseapp.com",
  projectId: "curso-reactudemy",
  storageBucket: "curso-reactudemy.appspot.com",
  messagingSenderId: "614239271516",
  appId: "1:614239271516:web:387abf37af33caf7e34499",
  measurementId: "G-YTT9DMPZX2"
};

const firebaseApp = initializeApp(firebaseConfig); 
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export{ db, auth };

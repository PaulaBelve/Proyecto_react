import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRkDiHKSGZgZdH_Q0EEltHZUnpcWxUsHU",
  authDomain: "backend-delfos.firebaseapp.com",
  projectId: "backend-delfos",
  storageBucket: "backend-delfos.appspot.com",
  messagingSenderId: "75742025782",
  appId: "1:75742025782:web:b8f1f1ea79f97ad167a097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
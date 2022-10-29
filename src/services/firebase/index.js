import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_torageBucket,//"backend-delfos.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,//"75742025782",
  appId: process.env.REACT_APP_appId //"1:75742025782:web:b8f1f1ea79f97ad167a097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
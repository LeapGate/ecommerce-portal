import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA-eUxdEybXpvNneNN66OjCQkLt15Yx4hE",
  authDomain: "mi-proyecto-react-23183.firebaseapp.com",
  projectId: "mi-proyecto-react-23183",
  storageBucket: "mi-proyecto-react-23183.appspot.com",
  messagingSenderId: "701640102963",
  appId: "1:701640102963:web:36ec3549fe90123b237f46"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
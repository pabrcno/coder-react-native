import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "put your api key here :D",
  authDomain: "auth Domain",
  projectId: "projectId",
  storageBucket: "storge bucket",
  messagingSenderId: "ANd yoUr Messaging SEnder herE",
  appId: "and your appID hereee",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);

export default db;

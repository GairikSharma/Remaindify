import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBBs_42ZVVIP1_DuScDK7mnnu8GjGmfz4k",
  authDomain: "reminderapp-d06a2.firebaseapp.com",
  projectId: "reminderapp-d06a2",
  storageBucket: "reminderapp-d06a2.appspot.com",
  messagingSenderId: "491740003001",
  appId: "1:491740003001:web:6df939f6ea71a732dc7968",
  measurementId: "G-T0BPFYKJZH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export default auth;

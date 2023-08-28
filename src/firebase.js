import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBh1Yj8DrrFZVHlLxkahmpt5hJCBZMmN8",
  authDomain: "linked-in-clone-c0dc7.firebaseapp.com",
  projectId: "linked-in-clone-c0dc7",
  storageBucket: "linked-in-clone-c0dc7.appspot.com",
  messagingSenderId: "261431213907",
  appId: "1:261431213907:web:b7242864abce37b5ababa6",
  measurementId: "G-33LC0CLGSJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export { auth, db, provider };

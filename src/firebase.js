import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB9ldfBsp654ecXqawH4b03YIVuAeelOQ4",
  authDomain: "linked-in-clone-d0e88.firebaseapp.com",
  projectId: "linked-in-clone-d0e88",
  storageBucket: "linked-in-clone-d0e88.appspot.com",
  messagingSenderId: "132461257396",
  appId: "1:132461257396:web:23a48603bc9d4660fb2de1",
  measurementId: "G-N1DRMNNYJK",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const fireStore = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { auth, provider, storage };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLQeOY6YdsyqbvnrCdJIsRhs6eEMG38Us",
  authDomain: "chatapp-7cc36.firebaseapp.com",
  projectId: "chatapp-7cc36",
  storageBucket: "chatapp-7cc36.appspot.com",
  messagingSenderId: "573104360088",
  appId: "1:573104360088:web:b8d3e937cd379ad9951eed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
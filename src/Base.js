import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAXrnxVZyvND0_rFR1-75PZvcrMaSXOkBU",
    authDomain: "elisha-foundation.firebaseapp.com",
    projectId: "elisha-foundation",
    storageBucket: "elisha-foundation.appspot.com",
    messagingSenderId: "843218362796",
    appId: "1:843218362796:web:2a8c8c8d580d764da71a09"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMAHJxmW7JOtOpe09GnE1HXD-hCQw1Tss",
  authDomain: "e-library-47617.firebaseapp.com",
  projectId: "e-library-47617",
  storageBucket: "e-library-47617.appspot.com",
  messagingSenderId: "1078564740469",
  appId: "1:1078564740469:web:d2f8c922c0af4b46cb073c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

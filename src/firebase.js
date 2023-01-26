// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCPbzPFNQLCuZJoORijxCyDHOhI7ROZn0Q",
    authDomain: "chat-33d16.firebaseapp.com",
    projectId: "chat-33d16",
    storageBucket: "chat-33d16.appspot.com",
    messagingSenderId: "263371259269",
    appId: "1:263371259269:web:82856a6b92d7435c6058ec",
    measurementId: "G-33EFF1K4VX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_AUTH,
    authDomain: "vite-vanilla-portfolio.firebaseapp.com",
    projectId: "vite-vanilla-portfolio",
    storageBucket: "vite-vanilla-portfolio.firebasestorage.app",
    messagingSenderId: "1064851362471",
    appId: "1:1064851362471:web:57a7e7ff2c03c36bed0182"
  };
  
export class FirebaseManager {
    app = initializeApp(firebaseConfig);
    constructor() {}
    getFromDatabase(){}
}
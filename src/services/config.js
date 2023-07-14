// importo librerias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//initializeApp = esta función la utilizo para conectarme a Firebase.

//getFirestore = se utiliza par obtener una instancia de Firestore.

// Objeto con informacion de la cuenta + mi key
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yerba-buena-f8e69.firebaseapp.com",
  projectId: "yerba-buena-f8e69",
  storageBucket: "yerba-buena-f8e69.appspot.com",
  messagingSenderId: "1037257215391",
  appId: "1:1037257215391:web:04cbb8cc038fd1fa0e81aa",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

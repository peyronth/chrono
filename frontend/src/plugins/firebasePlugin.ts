import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
import { App } from 'vue';

// Configuration Firebase avec les variables d'environnement
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialiser Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(firebaseApp);
const db: Firestore = getFirestore(firebaseApp);

export default {
  install: (vueApp: App) => {
    vueApp.provide('firebase', firebaseApp);
    vueApp.provide('analytics', analytics);
    vueApp.provide('db', db);
    vueApp.config.globalProperties.$firebase = firebaseApp;
    vueApp.config.globalProperties.$analytics = analytics;
    vueApp.config.globalProperties.$db = db;
  }
};

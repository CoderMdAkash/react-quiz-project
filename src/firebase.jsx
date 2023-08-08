import { initializeApp } from "firebase/app";

const app = initializeApp({
  // apiKey: import.meta.env.REACT_APP_API_KEY,
  apiKey: "AIzaSyBXKlVebAxerBRAYIKfxqjqKQGhu_bsk8A",
  authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_ID,
  measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID,
  databaseURL:
    "https://caretcandy-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default app;

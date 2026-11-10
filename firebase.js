// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2dE37JAPjcNnswT2adchJuwiczvhtogY",
  authDomain: "campus-lost-and-found-9fb8e.firebaseapp.com",
  projectId: "campus-lost-and-found-9fb8e",
  storageBucket: "campus-lost-and-found-9fb8e.firebasestorage.app",
  messagingSenderId: "85672832313",
  appId: "1:85672832313:web:6f626037008b47e696cce8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
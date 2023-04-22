
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg-zifSkQbUIClBim1Ze6_9wj0TafVx-8",
  authDomain: "color-choose.firebaseapp.com",
  projectId: "color-choose",
  storageBucket: "color-choose.appspot.com",
  messagingSenderId: "830858309789",
  appId: "1:830858309789:web:cf741ef34a7ed7e8a96474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

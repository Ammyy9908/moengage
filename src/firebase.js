// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRk7fLsfLuyrrYkAZ4dnueRYPeHGRzrK8",
  authDomain: "kodnest-communications.firebaseapp.com",
  projectId: "kodnest-communications",
  storageBucket: "kodnest-communications.appspot.com",
  messagingSenderId: "31354947826",
  appId: "1:31354947826:web:63224e968a58d10dc1a86b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
let messaging;
if (typeof window !== "undefined") {
  messaging = getMessaging(app);
}
export { messaging };

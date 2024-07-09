import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDiwQoZSnQJh-VYWdCpv26R3IqPKeygnVQ",
    authDomain: "rst-discussion-chat.firebaseapp.com",
    projectId: "rst-discussion-chat",
    storageBucket: "rst-discussion-chat.appspot.com",
    messagingSenderId: "662024421587",
    appId: "1:662024421587:web:0f1339665a0f693a3a1426"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
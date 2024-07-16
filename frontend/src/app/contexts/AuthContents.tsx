import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

firebase.initializeApp(firebaseConfig);

export type User = {
    user: firebase.User | undefined;
    signIn: () => Promise<firebase.auth.UserCredential>;
    signOut: () => Promise<void>;
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const AuthContext = createContext<firebase.User | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}

const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();

export default function AuthContents( {children}: {children: any} ) {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(user) => {
      setUser(user);
    });
  }, []);

  const value = { user, signIn, signOut } as User

  return (
    <AuthContext.Provider value={user}>
      { children }
    </AuthContext.Provider>
  )
}
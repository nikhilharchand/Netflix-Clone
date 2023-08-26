import { createContext, useContext, useEffect, useState } from 'react';
import { auth,db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, // Fixed the function name here
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'; // Fixed the import path here
import {setDoc,doc} from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({}); // Initialize user to null

  function signUp(email, password) {
   createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc( db,'users',email),{
      savedShows:[]
    })
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []); // Added an empty dependency array to run the effect only once

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}

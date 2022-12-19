import { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../shared/util/firebase.config";
import React from "react";

const AuthContext = React.createContext({
  googleSignIn: () => {},
  logOut: () => {},
  user: {} || null,
});

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<{} | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "shared/util/firebase.config";
import { IUserData } from "shared/interfaces/IUserData.interface";

const AuthContext = React.createContext({
  googleSignIn: () => fn(),
  logOut: () => {},
  user: null as User | null,
});

const fn = () => new Promise<void>((res, rej) => undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const userResult = await signInWithPopup(auth, provider);

    const docRef = doc(db, "users", userResult.user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.data() === undefined) {
      const userData: IUserData = {
        name: userResult.user.displayName!,
        email: userResult.user.email!,
        photoURL: userResult.user.photoURL!,
        wallets: [],
      };
      await setDoc(doc(db, "users", userResult.user.uid), userData);
    }
    // signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    localStorage.clear();
    setUser(null);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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

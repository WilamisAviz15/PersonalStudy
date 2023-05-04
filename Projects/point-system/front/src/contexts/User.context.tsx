import React, { createContext, useState } from "react";

import { UserInterface } from "../pages/auth/interfaces/user.interface";

export type UserType = {
  currentUser: UserInterface | null;
  setCurrentUser?: React.Dispatch<React.SetStateAction<UserInterface | null>>;
};

export const UserContext = createContext<UserType | null>(null);

export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);

  return <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>;
};

import React, { createContext } from "react";

export const UserContext = createContext({});
UserContext.displayName = "User";

export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

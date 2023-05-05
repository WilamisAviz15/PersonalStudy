import React, { createContext } from "react";

import { UserInfoInterface, UserInterface } from "../pages/auth/interfaces/user.interface";

export type UserContextType = {
  currentUser: UserInfoInterface | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInfoInterface | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

// export const UserProvider = ({ children }: { children: JSX.Element }) => {
//   const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);

//   return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
// };

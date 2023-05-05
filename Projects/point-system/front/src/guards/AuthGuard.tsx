import React, { useState } from "react";

import Sidenav from "../shared/components/Sidenav";
import NotFound from "../pages/not-found";
import { UserInfoInterface, UserInterface } from "../pages/auth/interfaces/user.interface";
import { isOfType } from "../components/Card/typeguards";
import { UserContext } from "../contexts/UserContext";

const AuthGuard = ({ Component, route }: { Component: React.FC; route: string }) => {
  let permission = false;
  const [currentUser, setCurrentUser] = useState<UserInfoInterface | null>(null);
  const user = JSON.parse(localStorage.getItem("user") as string) as UserInfoInterface | null;

  //TODO: revisar esse typeguard
  if (user && isOfType<UserInfoInterface>(user, ["id", "registrationNumber", "name", "cpf", "menus"])) {
    if (!currentUser) {
      setCurrentUser(user);
    }

    permission = user.menus.find((menu: any) => menu.menuKey === route);
  }

  return permission ? (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Sidenav>
        <Component />
      </Sidenav>
    </UserContext.Provider>
  ) : (
    <NotFound />
  );
};

export default AuthGuard;

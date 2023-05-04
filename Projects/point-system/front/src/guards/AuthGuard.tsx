import React from "react";

import Sidenav from "../shared/components/Sidenav";
import { UserInfoInterface } from "../pages/auth/interfaces/user.interface";
import { isOfType } from "../components/Card/typeguards";
import NotFound from "../pages/not-found";

const AuthGuard = ({ Component, route }: { Component: React.FC; route: string }) => {
  let permission = false;
  const user = JSON.parse(localStorage.getItem("user") as string) as UserInfoInterface | null;

  //TODO: revisar esse typeguard
  if (user && isOfType<UserInfoInterface>(user, ["id", "registrationNumber", "name", "cpf", "menus"])) {
    permission = user.menus.find((menu: any) => menu.menuKey === route);
  }

  return permission ? (
    <Sidenav>
      <Component />
    </Sidenav>
  ) : (
    <NotFound />
  );
};

export default AuthGuard;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Appointments from "../pages/appointments";
import Profile from "../pages/profile";
import Auth from "../pages/auth";
import AuthGuard from "../guards/AuthGuard";
import Home from "../pages/home";
import NotFound from "../pages/not-found";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/" element={<Auth />}></Route>
        <Route path="/" element={<AuthGuard Component={Home} route={"inicio"} />} />
        <Route path="/marcacoes" element={<AuthGuard Component={Appointments} route={"appointments"} />} />
        <Route path="/perfil" element={<AuthGuard Component={Profile} route={"profiles"} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

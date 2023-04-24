import { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import InputText from "./components/InputText";
import Login from "./pages/auth";
import Navbar from "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import TextCard from "./components/Card/components/TextCard";
import Home from "./pages/home";
import Sidenav from "./shared/components/Sidenav";
import Auth from "./pages/auth";

function App() {
  return (
    <>
      <Sidenav>
        <Home />
      </Sidenav>
    </>
  );
}

export default App;

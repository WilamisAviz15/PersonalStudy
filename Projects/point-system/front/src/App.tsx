import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import InputText from "./components/InputText";
import Login from "./pages/auth";
import Navbar from "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card type="double" params={{ title: "a", description: "a", ass: "dfd" }} />
    </>
  );
}

export default App;

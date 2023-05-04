import React from "react";

import "./App.css";
import { UserProvider } from "./contexts/User.context";
import Router from "./routes/routes";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;

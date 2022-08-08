import { useState } from "react";
import "./App.css";
import DialogError from "./components/Dialog/DialogError";
import FormUsers from "./components/NewUsers/FormUsers";
import Users from "./components/Users/Users";

const INITIAL_EXPENSES = [
  {
    id: "1",
    name: "Will",
    age: 24,
  },
];

function App() {
  const [users, setUsers] = useState(INITIAL_EXPENSES);

  const saveUserHandler = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <div className="App">
      <FormUsers onSaveUser={saveUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;

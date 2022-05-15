import React from "react";

const showEvent = () => {
  console.log("envento clicado");
};
const Button = <button onClick={showEvent}>Mostrar evento</button>;

const App = () => {
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo</p>
      {Button}
    </div>
  );
};

export default App;

import "./App.css";
import Counter from "./Counter";
import Header from "./Header";

function App() {
  return (
    <>
      <Header name="ProgBR" links={["About", "Buy", "Contact"]}></Header>
      <Counter count={1} />
    </>
  );
}

export default App;

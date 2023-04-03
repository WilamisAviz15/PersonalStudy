import "./App.css";
import Stopwatch from "./assets/components/Stopwatch";

interface cronometer {
  hour: number;
  minute: number;
  second: number;
}

function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;

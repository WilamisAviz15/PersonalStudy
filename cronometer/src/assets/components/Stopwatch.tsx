import { useEffect, useState } from "react";
import Button from "./Button";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleStartOrPause() {
    setIsRunning(!isRunning);
  }

  function getHours(): number {
    return Math.floor(time / 360000);
  }

  function getMinutes(): number {
    return Math.floor((time % 360000) / 6000);
  }

  function getSeconds(): number {
    return Math.floor((time % 6000) / 100);
  }

  function getMilliseconds() {
    return time % 100;
  }

  function reset() {
    setTime(0);
  }

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return (
    <div>
      <h1>Cronometer</h1>
      <p className="stopwatch-time">
        {getHours()}:{getMinutes().toString().padStart(2, "0")}:
        {getSeconds().toString().padStart(2, "0")}:
        {getMilliseconds().toString().padStart(2, "0")}
      </p>
      <Button
        text={isRunning ? "Pause" : "Start"}
        onClick={handleStartOrPause}
      />
      <Button text="Reset" onClick={reset} />
    </div>
  );
};

export default Stopwatch;

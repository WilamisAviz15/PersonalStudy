import { useEffect, useState } from "react";
import Button from "../button";
import styles from "./Stopwatch.module.scss";
import Chronometer from "../chronometer";

const Stopwatch = () => {
  const [lastPause, setLastPause] = useState<string | null>(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleStartOrPause() {
    if (isRunning) {
      setLastPause(new Date().toString().split(" ")[4]);
    }
    setIsRunning(!isRunning);
  }

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return (
    <div className={styles.container}>
      <div className={styles.container__view}>
        <h1>Cronometer</h1>
        <Chronometer time={time} />
        <div className={styles.container__actions}>
          <Button
            text={isRunning ? "Pause" : "Start"}
            onClick={handleStartOrPause}
          />
          <Button text="Reset" onClick={() => setTime(0)} />
        </div>
        {lastPause && (
          <div>
            <p>Last pause at: {lastPause}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;

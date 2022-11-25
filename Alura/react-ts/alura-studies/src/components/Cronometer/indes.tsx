import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../interfaces/ITask.interface";
import { useEffect, useState } from "react";

interface PropsClock {
  selectedTask: ITask | undefined;
  finishTask: () => void;
}

const Cronometer = ({ selectedTask, finishTask }: PropsClock) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selectedTask?.time) setTime(timeToSeconds(selectedTask.time));
  }, [selectedTask]);

  const regressive = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose one card and start the cronometer.</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button text="Start" onClick={() => regressive(time)} />
    </div>
  );
};

export default Cronometer;

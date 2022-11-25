import React, { useState } from "react";
import { ITask } from "../../interfaces/ITask.interface";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuid } from "uuid";

const Form = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) => {
  const [studyName, setStudyName] = useState<string>("");
  const [time, setTime] = useState<string>("00:00");

  const handleChangeStudyName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStudyName(event.target.value);
  };

  const handleChangeTime = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTime(event.target.value);
  };

  const saveTask = (event: any) => {
    const task: ITask = {
      id: uuid(),
      name: studyName,
      time,
      selected: false,
      completed: false,
    };
    event.preventDefault();
    setTasks((oldTasks) => [...oldTasks, task]);
    setStudyName("");
    setTime("00:00");
  };

  return (
    <form className={style.novaTarefa} onSubmit={saveTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          value={studyName}
          onChange={(event) => handleChangeStudyName(event)}
          type="text"
          name="task"
          id="task"
          placeholder="What do you wanna study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          value={time}
          onChange={(event) => handleChangeTime(event)}
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button text="Add" type="submit" />
    </form>
  );
};

export default Form;

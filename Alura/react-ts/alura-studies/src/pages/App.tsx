import React, { useState } from "react";
import Cronometer from "../components/Cronometer/indes";
import Form from "../components/Form";
import List from "../components/List";
import { ITask } from "../interfaces/ITask.interface";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((oldTask) => ({
        ...oldTask,
        selected: oldTask.id === selectedTask.id ? true : false,
      }))
    );
  };

  const finishTask = () => {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} setSelectedTask={selectTask} />
      <Cronometer selectedTask={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;

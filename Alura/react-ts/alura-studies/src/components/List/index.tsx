import React, { useState } from "react";
import { ITask } from "../../interfaces/ITask.interface";
import Item from "./Item";
import style from "./List.module.scss";

interface IProps {
  tasks: ITask[];
  setSelectedTask: (selectedTask: ITask) => void;
}

const List = ({ tasks, setSelectedTask }: IProps) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item setSelectedTask={setSelectedTask} key={task.id} task={task} />
        ))}
      </ul>
    </aside>
  );
};

export default List;

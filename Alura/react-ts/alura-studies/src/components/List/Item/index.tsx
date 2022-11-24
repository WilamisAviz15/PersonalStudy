import style from "./Item.module.scss";
import { ITask } from "../../../interfaces/ITask.interface";

interface IProps {
  task: ITask;
  setSelectedTask: (selectedTask: ITask) => void;
}

const Item = ({ task, setSelectedTask }: IProps) => {
  return (
    <li
      className={`${style.item} ${task.selected ? style.itemSelecionado : ""} ${
        task.completed ? style.itemCompletado : ""
      }`}
      onClick={() => !task.completed && setSelectedTask(task)}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
      {task.completed && (
        <span className={style.concluido} aria-label="task complete"></span>
      )}
    </li>
  );
};

export default Item;

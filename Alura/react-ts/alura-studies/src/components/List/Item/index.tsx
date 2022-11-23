import style from "./Item.module.scss";
import { ITask } from "../../../interfaces/ITask.interface";

interface IProps {
  task: ITask;
  setSelectedTask: (selectedTask: ITask) => void;
}

const Item = ({ task, setSelectedTask }: IProps) => {
  console.log(task);
  return (
    <li
      className={`${style.item} ${task.selected ? style.itemSelecionado : ""}`}
      onClick={() => setSelectedTask(task)}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
    </li>
  );
};

export default Item;

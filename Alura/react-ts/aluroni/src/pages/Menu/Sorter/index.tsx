import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import styles from "./Sorter.module.scss";
import options from "./options.json";

interface IProps {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

const Sorter = ({ order, setOrder }: IProps) => {
  const [opened, setOpened] = useState(false);
  const orderName =
    order && options.find((option) => option.value === order)?.name;

  return (
    <button
      className={classNames({
        [styles.sorter]: true,
        [styles["sorter--ativo"]]: order !== "",
      })}
      onClick={() => setOpened(!opened)}
      onBlur={() => setOpened(false)}
    >
      <span>{orderName || "Ordenar Por"}</span>
      {opened ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.sorter__options]: true,
          [styles["sorter__options--ativo"]]: opened,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.sorter__option}
            key={option.value}
            onClick={() => setOrder(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Sorter;

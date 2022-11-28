import styles from "./Card.module.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Card = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;

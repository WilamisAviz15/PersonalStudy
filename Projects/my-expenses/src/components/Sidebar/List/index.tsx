import { FaWallet, FaHome, FaUserAlt } from "react-icons/fa";

import styles from "./List.module.scss";

const List = () => {
  return (
    <nav className={styles.sidebar__nav}>
      <a href="/">
        <FaHome />
      </a>
      <a href="/">
        <FaWallet />
      </a>
      <a href="/">
        <FaUserAlt />
      </a>
    </nav>
  );
};

export default List;

import { FaWallet, FaHome, FaUserAlt } from "react-icons/fa";

import styles from "./List.module.scss";

const List = () => {
  return (
    <nav className={styles.sidebar__nav}>
      <ul>
        <li>
          <a href="/">
            <FaHome />
          </a>
        </li>
        <li>
          <a href="/">
            <FaWallet />
          </a>
        </li>
        <li>
          <a href="/">
            <FaUserAlt />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default List;

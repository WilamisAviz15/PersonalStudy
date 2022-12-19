import { FaWallet, FaHome, FaUserAlt } from "react-icons/fa";

import styles from "./List.module.scss";

const List = ({ logout }: { logout: () => {} }) => {
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
          <a href="/" onClick={logout}>
            <FaUserAlt />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default List;

import { FaSignOutAlt, FaHome, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./List.module.scss";

const List = ({ logout }: { logout: () => {} }) => {
  return (
    <nav className={styles.sidebar__nav}>
      <ul>
        <li>
          <Link to="/home">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUserAlt />
          </Link>
        </li>
        <li>
          <Link to="/auth" onClick={logout}>
            <FaSignOutAlt />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default List;

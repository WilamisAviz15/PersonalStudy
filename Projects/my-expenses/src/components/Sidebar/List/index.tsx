import { FaSignOutAlt, FaHome, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "pages/auth/context/AuthProvider";
import styles from "./List.module.scss";

const List = () => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const logout = () => {
    try {
      logOut().then(() => navigate("/auth"));
    } catch (err) {
      console.log(err);
    }
  };

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

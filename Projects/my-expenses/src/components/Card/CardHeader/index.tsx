import { FaSearch } from "react-icons/fa";

import Select from "components/Select";
import styles from "./CardHeader.module.scss";

const CardHeader = () => {
  return (
    <div
      className={styles.card__header__dropdown}
      style={{ display: "inline-flex", justifyContent: "space-between" }}
    >
      <Select />
      <span className={styles.card__header__search}>
        <FaSearch />
        <input type="text" placeholder="Search your wallet" />
      </span>
    </div>
  );
};

export default CardHeader;

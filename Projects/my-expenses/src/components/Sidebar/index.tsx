import List from "./List";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <header className={styles.sidebar}>
      <List />
    </header>
  );
};

export default Sidebar;

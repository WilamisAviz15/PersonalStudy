import List from "./List";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ logout }: { logout: () => {} }) => {
  return (
    <header className={styles.sidebar}>
      <List logout={logout} />
    </header>
  );
};

export default Sidebar;

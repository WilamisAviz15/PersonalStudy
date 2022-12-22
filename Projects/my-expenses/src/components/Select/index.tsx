import styles from "./Select.module.scss";

const Select = () => {
  return (
    <select className={styles.select}>
      <option>show all</option>
      <option>another</option>
    </select>
  );
};

export default Select;

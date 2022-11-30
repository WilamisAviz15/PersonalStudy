import styles from "./Select.module.scss";

import React from "react";

const Select = () => {
  return (
    <select className={styles.select}>
      <option>show all</option>
      <option>another</option>
    </select>
  );
};

export default Select;

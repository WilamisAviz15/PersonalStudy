import React from "react";

import styles from "./AccessProfileItem.module.scss";

const AccessProfileItem = ({ value }: { value: string }) => {
  return <span className={styles.profile__item}>{value}</span>;
};

export default AccessProfileItem;

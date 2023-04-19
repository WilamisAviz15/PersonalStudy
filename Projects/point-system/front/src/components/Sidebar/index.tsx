import React from "react";
import { MdDashboard, MdAddAPhoto } from "react-icons/md";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebar__menu}>
        <div className={styles["sidebar__header"]}>
          <h3>Colaborador </h3>
          <div></div>
        </div>
        <ul>
          <li className={styles["sidebar__header--active"]}>
            <MdDashboard />
            Início
          </li>
          <li>
            <MdDashboard />
            Marcações
          </li>
          <li>
            <MdDashboard />
            Perfil
          </li>
          <li>
            {" "}
            <MdDashboard />
            Sair
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.sidebar__footer}>
          <MdAddAPhoto className={styles["sidebar__footer__profile-icon"]} />
          <div>
            <span>Nome</span>
            <span>Colaborador</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

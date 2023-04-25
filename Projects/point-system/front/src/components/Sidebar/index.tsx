import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAddAPhoto } from "react-icons/md";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const isRouteActive = (isActive: boolean) => (isActive ? styles["sidebar__header--active"] : "");

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebar__menu}>
        <div className={styles["sidebar__header"]}>
          <h3>Colaborador </h3>
          <div></div>
        </div>
        <ul>
          <li>
            <NavLink className={({ isActive }) => isRouteActive(isActive)} to="/">
              <MdDashboard />
              Início
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isRouteActive(isActive)} to="/marcacoes">
              <MdDashboard />
              Marcações
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isRouteActive(isActive)} to="/perfil">
              <MdDashboard />
              Perfil
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout">
              <MdDashboard />
              Sair
            </NavLink>
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

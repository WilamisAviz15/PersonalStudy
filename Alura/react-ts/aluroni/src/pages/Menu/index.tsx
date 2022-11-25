import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Searcher from "./Searcher";
import { useState } from "react";
import Filters from "./Filters";

const Menu = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
        <header className={styles.header}>
          <div className={styles.header__text}>A casa do código e da massa</div>
        </header>
        <section className={styles.menu}>
          <h3 className={styles.menu__title}>Menu</h3>
          <Searcher search={search} setSearch={setSearch} />
          <div className={styles.cardapio__filtros}>
            <Filters filter={filter} setFilter={setFilter} />
          </div>
        </section>
      </nav>
    </main>
  );
};

export default Menu;

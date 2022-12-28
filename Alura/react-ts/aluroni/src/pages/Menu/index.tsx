import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Searcher from "./Searcher";
import { useState } from "react";
import Filters from "./Filters";
import Sorter from "./Sorter";
import Items from "./Items";

const Menu = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState<string>("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
        <header className={styles.header}>
          <div className={styles.header__text}>A casa do código e da massa</div>
        </header>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>Menu</h3>
          <Searcher search={search} setSearch={setSearch} />
          <div className={styles.cardapio__filtros}>
            <Filters filter={filter} setFilter={setFilter} />
            <Sorter order={order} setOrder={setOrder} />
          </div>
          <Items />
        </section>
      </nav>
    </main>
  );
};

export default Menu;

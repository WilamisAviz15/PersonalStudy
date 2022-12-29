import styles from "./Menu.module.scss";
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
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>Cardapio</h3>
      <Searcher search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filters filter={filter} setFilter={setFilter} />
        <Sorter order={order} setOrder={setOrder} />
      </div>
      <Items search={search} filter={filter} order={order} />
    </section>
  );
};

export default Menu;

import styles from "./Items.module.scss";
import menu from "./items.json";
import Item from "./Item/index";
import { useEffect, useState } from "react";

interface IProps {
  search: string;
  filter: number | null;
  order: string;
}

const Items = ({ filter, order, search }: IProps) => {
  const [list, setList] = useState(menu);

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function sorting(list: typeof menu) {
    switch (order) {
    case "porcao":
      return list.sort((a, b) => (a.size > b.size ? 1 : -1));
    case "qtd_pessoas":
      return list.sort((a, b) => (a.serving > b.serving ? 1 : -1));
    case "preco":
      return list.sort((a, b) => (a.price > b.price ? 1 : -1));
    default:
      return list;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(sorting(newList));
  }, [filter, search, order]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;

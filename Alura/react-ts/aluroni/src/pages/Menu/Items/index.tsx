import styles from "./Items.module.scss";
import menu from "./items.json";
import Item from "./Item/index";

const Items = () => {
  return (
    <div className={styles.itens}>
      {menu.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;

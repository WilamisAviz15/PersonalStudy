import styles from "./Card.module.scss";

const CardBox = ({ backgroundColor }: { backgroundColor: string }) => {
  return (
    <article
      className={styles.cardbox}
      style={{ backgroundColor: backgroundColor }}
    >
      <h3>Natal</h3>
      <h4>Descricao da caixinha</h4>
      <span> R$ 0,02</span>
    </article>
  );
};

export default CardBox;

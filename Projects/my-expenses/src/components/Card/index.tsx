import styles from "./Card.module.scss";

const Card = ({
  children,
  backgroundColor,
}: {
  children: JSX.Element;
  backgroundColor?: string;
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};

export default Card;

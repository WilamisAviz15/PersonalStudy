import styles from "./Button.module.scss";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;

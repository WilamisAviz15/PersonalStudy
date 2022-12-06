import styles from "./DialogBackdrop.module.scss";

interface IProps {
  onCloseDialog: (value: boolean) => void;
}

const DialogBackdrop = ({ onCloseDialog }: IProps) => {
  return (
    <div
      className={styles["container-backdrop"]}
      onClick={() => onCloseDialog(false)}
    ></div>
  );
};

export default DialogBackdrop;

import THeadItem from "./THeadItem";
import styles from "./THead.module.scss";

const THead = ({ theadData }: { theadData: string[] }) => {
  return (
    <thead className={styles.thead}>
      <tr>
        {theadData.map((item) => {
          return <THeadItem key={item} item={item} />;
        })}
      </tr>
    </thead>
  );
};

export default THead;

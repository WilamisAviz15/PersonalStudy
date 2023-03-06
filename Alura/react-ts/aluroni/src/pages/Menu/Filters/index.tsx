import filters from "./filters.json";
import styles from "./Filters.module.scss";
import classNames from "classnames";

type iFilter = typeof filters[0];

interface PropsFilter {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filters = ({ filter, setFilter }: PropsFilter) => {
  const selectFilter = (option: iFilter) => {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  };

  const handleLoadingFilters = () => {
    return (
      <div className={styles.filtros}>
        {filters.map((option) => (
          <button
            className={classNames({
              [styles.filtros__filtro]: true,
              [styles["filtros__filtro--ativo"]]: filter === option.id,
            })}
            key={option.id}
            onClick={() => selectFilter(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  };

  return <div>{handleLoadingFilters()}</div>;
};

export default Filters;

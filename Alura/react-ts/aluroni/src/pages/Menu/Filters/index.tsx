import filters from "./filters.json";
import styles from "./Filters.module.scss";

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
    return filters.map((option) => {
      return (
        <div className={styles.filtros}>
          <button
            className={`${styles.filtros__filtro} ${
              filter === option.id ? styles["filtros__filtro--ativo"] : ""
            }`}
            key={option.id}
            onClick={() => selectFilter(option)}
          >
            {option.label}
          </button>
        </div>
      );
    });
  };

  return <div>{handleLoadingFilters()}</div>;
};

export default Filters;

import styles from "./Searcher.module.scss";
import { CgSearch } from "react-icons/cg";

interface PropsSearcher {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Searcher({ search, setSearch }: PropsSearcher) {
  return (
    <div className={styles.buscador}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C5D5E" />
    </div>
  );
}

export default Searcher;

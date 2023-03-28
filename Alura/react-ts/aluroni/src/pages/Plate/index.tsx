import { useParams, useNavigate } from "react-router-dom";

import styles from "./Plate.module.scss";
import menu from "data/menu.json";
import TagsPlate from "components/TagsPlate";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";

const Plate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plate = menu.find((item) => item.id === Number(id));
  if (!plate) {
    return <NotFound />;
  }
  return (
    <DefaultPage>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{plate.title}</h1>
        <div className={styles.imagem}>
          <img src={plate.photo} alt={plate.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{plate.description}</p>
          <TagsPlate {...plate} />
        </div>
      </section>
    </DefaultPage>
  );
};

export default Plate;
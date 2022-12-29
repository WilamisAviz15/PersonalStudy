import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "./Plate.module.scss";
import menu from "data/menu.json";

const Plate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plate = menu.find((item) => item.id === Number(id));
  if (!plate) {
    return "";
  }
  return (
    <>
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
          <div className={styles.tags}>
            <div
              className={classNames({
                [styles.tags__tipo]: true,
                [styles[`tags__tipo__${plate.category.label.toLowerCase()}`]]:
                  true,
              })}
            >
              {plate.category.label}
            </div>
            <div className={styles.tags__porcao}>{plate.size}g</div>
            <div className={styles.tags__qtdpessoas}>
              Serve {plate.serving} pessoa {plate.serving == 1 ? "" : "s"}
            </div>
            <div className={styles.tags__valor}>
              R$ {plate.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plate;

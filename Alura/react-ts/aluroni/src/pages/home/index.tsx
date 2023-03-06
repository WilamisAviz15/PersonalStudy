import menu from "data/menu.json";
import styles from "./Home.module.scss";
import themeStyles from "styles/Theme.module.scss";
import nossaCasa from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { TypePlate } from "types/Plate";

const Home = () => {
  const navigate = useNavigate();
  let recommendedPlates = [...menu];
  recommendedPlates = recommendedPlates
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  function redirectToDetails(plate: TypePlate) {
    navigate(`/prato/${plate.id}`, { state: { plate } });
  }

  return (
    <section>
      <h3 className={themeStyles.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {recommendedPlates.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirectToDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={themeStyles.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua verde rio, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};

export default Home;

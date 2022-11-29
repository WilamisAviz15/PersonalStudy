import styles from "./Balance.module.scss";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "../Card";
import Button from "../Button";

const Balance = () => {
  return (
    <>
      {/* <Card>
        <article className={styles.dashboard}>
          <div className={styles.dashboard__header}>
            <h2>Balance</h2>
            <div className={styles.dashboard__header__conversion}>
              <button>R$</button>
              <button>US$</button>
            </div>
          </div>
          <div>
            <span className={styles.dashboard__balance}>R$ 3.000,000</span>
          </div>
          <div className={styles.dashboard__gain}>
            <a>
              <FaArrowUp className={styles.dashboard__gain__up} />
              <span className={styles.dashboard__gain__value}> R$ 0,02</span>
            </a>
            <a>
              <FaArrowDown className={styles.dashboard__gain__down} />
              <span className={styles.dashboard__gain__value}> R$ 0,00</span>
            </a>
          </div>
        </article>
      </Card> */}
      <Card>
        <article className={styles.dashboard}>
          <div className={styles.dashboard__header}>
            <h2>Your Personal Wallets</h2>
            <Button />
          </div>
          <div className={styles.dashboard__content}>
            <Card backgroundColor="#2196F3">
              <article className={styles.dashboard__content__box}>
                <img src="" alt="" />
                <h3>Natal</h3>
                <h4>Descricao da caixinha</h4>
                <span> R$ 0,02</span>
              </article>
            </Card>
            <Card backgroundColor="#009688">
              <article className={styles.dashboard__content__box}>
                <img src="" alt="" />
                <h3>Emergencia</h3>
                <h4>Descricao da caixinha</h4>
                <span> R$ 100,00</span>
              </article>
            </Card>
            <Card backgroundColor="#00BCD4">
              <article className={styles.dashboard__content__box}>
                <img src="" alt="" />
                <h3>Lanches</h3>
                <h4>Descricao da caixinha</h4>
                <span> R$ 50,00</span>
              </article>
            </Card>
            <Card backgroundColor="#8BC34A">
              <article className={styles.dashboard__content__box}>
                <img src="" alt="" />
                <h3>Apartamento</h3>
                <h4>Descricao da caixinha</h4>
                <span> R$ 800,00</span>
              </article>
            </Card>
            <Card backgroundColor="#2196F3">
              <article className={styles.dashboard__content__box}>
                <img src="" alt="" />
                <h3>Natal</h3>
                <h4>Descricao da caixinha</h4>
                <span> R$ 0,02</span>
              </article>
            </Card>
            <Card backgroundColor="#009688">
              <article className={styles.dashboard__content__box}>
                <img src="" alt="" />
                <h3>Emergencia</h3>
                <h4>Descricao da caixinha</h4>
                <span> R$ 100,00</span>
              </article>
            </Card>
            <Card backgroundColor="#00BCD4">
              <article className={styles.dashboard__content__box}>
                <img src="" alt="" />
                <h3>Lanches</h3>
                <h4>Descricao da caixinha</h4>
                <span> R$ 50,00</span>
              </article>
            </Card>
            <Card backgroundColor="#8BC34A">
              <article className={styles.dashboard__content__box}>
                <img src="" alt="" />
                <h3>Apartamento</h3>
                <h4>Descricao da caixinha</h4>
                <span> R$ 800,00</span>
              </article>
            </Card>
          </div>
        </article>
      </Card>
    </>
  );
};

export default Balance;

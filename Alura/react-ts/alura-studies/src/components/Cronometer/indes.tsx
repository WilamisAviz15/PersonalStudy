import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometer.module.scss";

const Cronometer = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose one card and start the cronometer</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button text="Start" />
    </div>
  );
};

export default Cronometer;

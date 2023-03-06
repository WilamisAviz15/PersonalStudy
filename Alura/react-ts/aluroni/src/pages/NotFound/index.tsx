import classNames from "classnames";

import styles from "./NotFound.module.scss";
import themeStyles from "styles/Theme.module.scss";
import { ReactComponent as NotFoundImage } from "assets/not_found.svg";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [themeStyles.container]: true,
      })}
    >
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </div>
      <NotFoundImage />
    </div>
  );
}

export default NotFound;

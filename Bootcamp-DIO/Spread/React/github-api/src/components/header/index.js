import React, { useState } from "react";
import * as S from "./styled";
const Header = () => {
  const [usernameForSearch, setUsernameForSearch] = useState();
  const submitGetUser = () => {
    if (!usernameForSearch) return;
  };
  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};
export default Header;

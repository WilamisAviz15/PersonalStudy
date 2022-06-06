import React from "react";
import "./styles.css";
import logo from "../../assets/logo-desktop.svg";
import coffee from "../../assets/rocket-coffee.png";

function Header() {
  return (
    <div className="wrapper">
      <header>
        <img src={logo} alt="Logo da empresa"></img>
        <ul className="list-header">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Recompensas</a>
          </li>
          <li>
            <a href="#">Gift Card</a>
          </li>
          <li>
            <a href="#">Lojas</a>
          </li>
        </ul>
        <button>PEGAR MEU CAFÉ</button>
      </header>
      <div className="container">
        <div className="texts">
          <h1 className="text">Great Coffee</h1>
          <h1 className="text special">&lt;Greate Code/&gt;</h1>
        </div>
        <img src={coffee} alt="Imagem de duas taças de café"></img>
      </div>
    </div>
  );
}

export default Header;

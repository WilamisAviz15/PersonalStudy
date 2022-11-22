import React from "react";

import open from "./open.png";
import favorite from "./favorito.png";

const Cards = (props) => {
  return (
    <ul className={props.styles.gallery__cards}>
      {props.pictures.map((picture) => {
        return (
          <li key={picture.id} className={props.styles.gallery__card}>
            <img
              className={props.styles.gallery__image}
              src={picture.image}
              alt={picture.title}
            />
            <p className={props.styles.gallery__description}>{picture.title}</p>
            <div>
              <p>{picture.credits}</p>
              <span>
                <img src={favorite} alt="icone coração de curtir" />
                <img src={open} alt="icone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;

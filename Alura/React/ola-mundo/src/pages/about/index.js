import Banner from "components/Banner";
import PostModel from "components/PostModel";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./styles.module.css";
import aboutMePicture from "assets/sobre_mim_foto.jpg";

const About = () => {
  return (
    <PostModel fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Wilamis</h3>
      <img
        src={aboutMePicture}
        alt="Foto do wilamis fazendo pose"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Sou estagiário de desenvolvimento web fullstack no Senai
      </p>
    </PostModel>
  );
};

export default About;

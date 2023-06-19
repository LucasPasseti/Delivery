import React from "react";

import "./equipe.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const Equipe = () => {
  const handleEmail = () => {
    // Lógica para enviar um email
    window.open("mailto:seuemail@example.com");
  };

  return (
    <div>
      <Navbar />
      <Header type="equipe" />
      <div className="equipe-container">
        <h2 className="equipe-title">Faça parte da nossa equipe</h2>
        <p className="equipe-description">
          Estamos sempre em busca de pessoas talentosas e dedicadas para se juntar à nossa equipe de delivery. Todos os estabelecimentos são Bem-vindos. Se você está interessado em fazer parte do nosso time, preencha o formulário abaixo ou entre em contato conosco através do email.
        </p>
        <form className="equipe-form">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit" onClick={handleEmail}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Equipe;
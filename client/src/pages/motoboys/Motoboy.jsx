import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./motoboy.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { AuthContext } from "../../components/context/AuthContext";
import { MotoboyContext } from "../../components/context/MotoboyContext";

const Motoboy = () => {
  const [selectedMotoboy, setSelectedMotoboy] = useState(null);
  const { user } = useContext(AuthContext);
  const { motoboys, addMotoboy } = useContext(MotoboyContext);

  const handleMotoboyClick = (motoboy) => {
    setSelectedMotoboy(motoboy);
  };

  // Salvar motoboys no localStorage ao adicionar um novo motoboy
  useEffect(() => {
    localStorage.setItem("motoboys", JSON.stringify(motoboys));
  }, [motoboys]);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="motoboyList">
        <ul>
          {motoboys.map((motoboy) => (
            <li key={motoboy._id} onClick={() => handleMotoboyClick(motoboy)}>
              <img src={motoboy.photo} alt={motoboy.name} />
              <div>
                <h3>{motoboy.name}</h3>
                <p>Gênero: {motoboy.gender}</p>
                <p>Veículo: {motoboy.vehicle}</p>
                <p>
                  Status:{" "}
                  {motoboy.status === "Available" ? "Disponível" : "Ocupado"}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {selectedMotoboy && (
          <div className="details">
            <img src={selectedMotoboy.photo} alt={selectedMotoboy.name} />
            <h3>{selectedMotoboy.name}</h3>
            <p>Gênero: {selectedMotoboy.gender}</p>
            <p>Veículo: {selectedMotoboy.vehicle}</p>
            <p>
              Status:{" "}
              {selectedMotoboy.status === "Available" ? "Disponível" : "Ocupado"}
            </p>
            <p>Avaliação: {selectedMotoboy.rating}</p>
            <p>Bag: {selectedMotoboy.bag ? "Sim" : "Não"}</p>
            <button onClick={() => setSelectedMotoboy(null)}>Fechar</button>
          </div>
        )}

        {!user && (
          <Link to="/adicionar-motoboy" className="addMotoboyButton">
            Adicionar Motoboy
          </Link>
        )}
      </div>
    </div>
  );
};

export default Motoboy;
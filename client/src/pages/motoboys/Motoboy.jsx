import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./motoboy.css";
import Navbar from "../../components/navbar/Navbar";

import { AuthContext } from "../../components/context/AuthContext";
import { MotoboyContext } from "../../components/context/MotoboyContext";
import Header from "../../components/header/Header";

const Motoboy = () => {
  const [selectedMotoboy, setSelectedMotoboy] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const { user } = useContext(AuthContext);
  const { motoboys, addMotoboy } = useContext(MotoboyContext);

  const handleMotoboyClick = (motoboy) => {
    setSelectedMotoboy(motoboy);
  };

  const handleSchedule = () => {
    // Verificar se há um motoboy selecionado e um dia escolhido
    if (selectedMotoboy && selectedDay) {
      // Verificar disponibilidade do motoboy
      if (selectedMotoboy.status === "Available") {
        // Agendar com o motoboy
        console.log("Agendar com o motoboy:", selectedMotoboy.name, "no dia", selectedDay);
      } else {
        console.log("Motoboy não está disponível para agendamento");
      }
    }
  };

  // Função para obter os dias disponíveis do motoboy selecionado
  const getAvailableDays = () => {
    if (selectedMotoboy) {
      const availableDays = selectedMotoboy.agenda.map((day) => day);
      return availableDays;
    }
    return [];
  };

  // Salvar motoboys no localStorage ao adicionar um novo motoboy
  useEffect(() => {
    localStorage.setItem("motoboys", JSON.stringify(motoboys));
  }, [motoboys]);

  return (
    <div>
      <Navbar />
      <Header type="motoboy" />
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
            <div className="daySelector">
              <h4>Selecione um dia:</h4>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="">Selecione o dia</option>
                {getAvailableDays().map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <Link to="/" >
            <button className="scheduleButton" onClick={handleSchedule}> 
              Agendar            
            </button>
            </Link>
          </div>
        )}

        {user && (
          <Link to="/adicionar-motoboy" className="addMotoboyButton">
            Adicionar Motoboy
          </Link>
        )}
      </div>
    </div>
  );
};

export default Motoboy;
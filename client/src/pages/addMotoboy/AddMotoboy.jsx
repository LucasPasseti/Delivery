import React, { useState, useContext } from "react";
import axios from "axios";
import "./addMotoboy.css";
import { MotoboyContext } from "../../components/context/MotoboyContext";

const AddMotoboy = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [status, setStatus] = useState("");
  const [bag, setBag] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [agenda, setAgenda] = useState([]);

  const motoboyContext = useContext(MotoboyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica para enviar os dados do novo motoboy para o servidor
    // ...

    // Upload da foto para o Cloudinary
    if (photo) {
      const data = new FormData();
      data.append("file", photo);
      data.append("upload_preset", "upload");

      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/passeti/image/upload",
          data
        );
        const imageUrl = uploadRes.data.url;

        // Atualizar o estado no contexto com os dados adicionados, incluindo a URL da foto e a agenda
        motoboyContext.dispatch({
          type: "ADD_MOTOBOY",
          payload: {
            name,
            gender,
            vehicle,
            status,
            bag,
            photo: imageUrl,
            agenda,
          },
        });

        // Resetar os campos do formulário após o envio
        setName("");
        setGender("");
        setVehicle("");
        setStatus("");
        setBag(false);
        setPhoto(null);
        setAgenda([]);
      } catch (error) {
        console.log(error);
      }
    } else {
      // Atualizar o estado no contexto com os dados adicionados sem a foto e a agenda
      motoboyContext.dispatch({
        type: "ADD_MOTOBOY",
        payload: {
          name,
          gender,
          vehicle,
          status,
          bag,
          photo: null,
          agenda,
        },
      });

      // Resetar os campos do formulário após o envio
      setName("");
      setGender("");
      setVehicle("");
      setStatus("");
      setBag(false);
      setAgenda([]);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleDaySelect = (day) => {
    if (agenda.includes(day)) {
      // Remover o dia da agenda se já estiver selecionado
      setAgenda(agenda.filter((item) => item !== day));
    } else {
      // Adicionar o dia à agenda se ainda não estiver selecionado
      setAgenda([...agenda, day]);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Adicionar Motoboy</h2>
        <div className="form__group">
          <label className="form__label">Nome:</label>
          <input
            className="form__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label">Gênero:</label>
          <input
            className="form__input"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label">Veículo:</label>
          <input
            className="form__input"
            type="text"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label">Status:</label>
          <select
            className="form__input"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Selecione o status</option>
            <option value="Available">Disponível</option>
            <option value="Ocupado">Ocupado</option>
          </select>
        </div>
        <div className="form__group">
          <label className="form__label">Bag:</label>
          <select
            className="form__input"
            value={bag}
            onChange={(e) => setBag(e.target.value === "true")}
          >
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </select>
        </div>
        <div className="form__group">
          <label className="form__label">Foto:</label>
          <input
            className="form__input"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <div className="form__group">
          <label className="form__label">Dias Disponíveis:</label>
          <div className="form__agenda">
            <label>
              <input
                type="checkbox"
                checked={agenda.includes("Segunda-feira")}
                onChange={() => handleDaySelect("Segunda-feira")}
              />
              Segunda-feira
            </label>
            <label>
              <input
                type="checkbox"
                checked={agenda.includes("Terça-feira")}
                onChange={() => handleDaySelect("Terça-feira")}
              />
              Terça-feira
            </label>
            <label>
              <input
                type="checkbox"
                checked={agenda.includes("Quarta-feira")}
                onChange={() => handleDaySelect("Quarta-feira")}
              />
              Quarta-feira
            </label>
            <label>
              <input
                type="checkbox"
                checked={agenda.includes("Quinta-feira")}
                onChange={() => handleDaySelect("Quinta-feira")}
              />
              Quinta-feira
            </label>
            <label>
              <input
                type="checkbox"
                checked={agenda.includes("Sexta-feira")}
                onChange={() => handleDaySelect("Sexta-feira")}
              />
              Sexta-feira
            </label>
            <label>
              <input
                type="checkbox"
                checked={agenda.includes("Sábado")}
                onChange={() => handleDaySelect("Sábado")}
              />
              Sábado
            </label>
            <label>
              <input
                type="checkbox"
                checked={agenda.includes("Domingo")}
                onChange={() => handleDaySelect("Domingo")}
              />
              Domingo
            </label>
          </div>
        </div>
        <button className="form__button" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddMotoboy;
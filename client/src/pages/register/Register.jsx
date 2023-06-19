import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./register.css";
import { AuthContext } from "../../components/context/AuthContext";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    cpf: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      await axios.post("/auth/register", credentials);
      navigate("/");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="registers">
      <div className="register-container">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="register-input"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="register-input"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="register-input"
        />
        <input
          type="text"
          placeholder="CPF"
          id="cpf"
          onChange={handleChange}
          className="register-input"
        />
        <button disabled={loading} onClick={handleClick} className="register-button">
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
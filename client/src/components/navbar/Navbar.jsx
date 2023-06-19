import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">motolivre</span>
        </Link>
        {!user ? (
          <div className="navItems">
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="navButton">Criar conta</button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="navButton">Entrar</button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
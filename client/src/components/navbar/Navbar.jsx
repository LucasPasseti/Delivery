import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">motolivre</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Criar conta</button>
            <button className="navButton">Entrar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
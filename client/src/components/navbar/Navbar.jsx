import "./navbar.css";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color: "inherit", textDecoration: "none" }}>
        <span className="logo">MotoLivre</span>
        </Link>
        <div className="navItems">
          <div className="search"></div>
          <button className="navButton">Criar Conta</button>
          <button className="navButton">Entrar</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar

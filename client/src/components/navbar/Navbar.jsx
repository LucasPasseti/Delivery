import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">MotoLivre</span>
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

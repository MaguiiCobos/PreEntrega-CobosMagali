import CartWidget from "../../coomon/cartWidget/CartWidget.jsx";
import "../navbar/Navbar.css";
import logo from "/public/logo.png"

function Navbar() {
  return (
    <div className="containerMenu">
      <div className="containerLogo">
        <img src={logo} alt="logo" />
        <h2 className="titulo">VISSEN</h2>
      </div>
      <ul>
        <li><a href="#" className="btnMenu">Inicio</a></li>
        <li><a href="#" className="btnMenu">Cursos</a></li>
        <li><a href="#" className="btnMenu">Contacto</a></li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default Navbar;

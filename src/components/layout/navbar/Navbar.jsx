import CartWidget from "../../coomon/cartWidget/CartWidget.jsx";
import "../navbar/Navbar.css";
import logo from "/public/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="containerMenu">
        <Link to="/" className="containerLogo">
          <img src={logo} alt="logo" />
          <h2 className="titulo">VISSEN</h2>
        </Link>
        <ul>
          <Link to="/" className="btnMenu">
            Inicio
          </Link>
          <Link to="/" className="btnMenu">
            Cursos
          </Link>
          <Link to="/" className="btnMenu">
            Contacto
          </Link>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
      <div>
        <ul className="categorias">
          <Link to="/category/programacion" className="btnCategoria">Programación</Link>
          <Link to="/category/idiomas" className="btnCategoria">Idiomas</Link>
          <Link to="/category/dibujo" className="btnCategoria">Dibujo</Link>
          <Link to="/category/marketing" className="btnCategoria">Marketing</Link>
          <Link to="/category/costura" className="btnCategoria">Costura</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

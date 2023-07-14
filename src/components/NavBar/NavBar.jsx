import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const mainIcon = "https://img.icons8.com/cotton/64/000000/thermos.png";

  return (
    <header className="header">
      <Link to="/">
        <div className="imgNombre">
          <img src={mainIcon} alt="Icono principal" className="imgNombre" />
          YERBA BUENA
        </div>
      </Link>

      <nav className="navBar">
        <NavLink to={"/"} className="categorias">
          Inicio
        </NavLink>

        <NavLink to={"/categoria/mates"} className="categorias">
          Mates
        </NavLink>

        <NavLink to={"/categoria/bombillas"} className="categorias">
          Bombillas
        </NavLink>

        <NavLink to={"/categoria/yerbas"} className="categorias">
          Yerbas
        </NavLink>

        <NavLink to={"/categoria/termos"} className="categorias">
          Termos
        </NavLink>

        <NavLink to={"/categoria/materas"} className="categorias">
          Materas
        </NavLink>

        <NavLink to={"/categoria/yerberas"} className="categorias">
          Yerberas
        </NavLink>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;

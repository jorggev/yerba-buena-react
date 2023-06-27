import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const mainIcon = "https://img.icons8.com/cotton/64/000000/thermos.png";

  /* return (
    <header className="header">
      <div className="imgNombre">
        <img src={mainIcon} alt="Icono principal" />
        YERBA BUENA
      </div>

      <nav className="navBar">
        <ul className="productosUl">
          <li className="productosLi">Mates</li>
          <li className="productosLi">Termos</li>
          <li className="productosLi">Bombillas</li>
          <li className="productosLi">Yerbas</li>
          <li className="productosLi">Materas</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  ); */

  return (
    <header className="header">
      <Link to="/">
        <div className="imgNombre">
          <img src={mainIcon} alt="Icono principal" className="imgNombre"/>
          YERBA BUENA
        </div>
      </Link>

      <nav className="navBar">
        <NavLink to={"/"} className="categorias">Inicio</NavLink>
        <NavLink to={"/category/mates"} className="categorias">Mates</NavLink>
        <NavLink to={"/category/bombillas"} className="categorias">Bombillas</NavLink>
        <NavLink to={"/category/yerbas"} className="categorias">Yerbas</NavLink>
        <NavLink to={"/category/termos"} className="categorias">Termos</NavLink>
        <NavLink to={"/category/materas"} className="categorias">Materas</NavLink>
        <NavLink to={"/category/yerberas"} className="categorias">Yerberas</NavLink>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;

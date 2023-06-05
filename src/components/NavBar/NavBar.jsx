import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  const mainIcon = "https://img.icons8.com/cotton/64/000000/thermos.png";

  return (
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
  );
};

export default NavBar;

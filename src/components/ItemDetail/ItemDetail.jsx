/* eslint-disable react/prop-types */
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../../context/CarContext";

const ItemDetail = ({
  id,
  nombre,
  img,
  categoria,
  stock,
  descripcion,
  precio,
}) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const { agregarProducto } = useContext(CarContext);

  // Función manejadora de la cantidad:
  const handleAgregar = (cantidad) => {
    setCantidadAgregada(cantidad);

    // Creo un objeto con el item y la cantidad:
    const item = {
      id,
      nombre,
      precio,
      cantidad,
      stock,
    };
    agregarProducto(item, cantidad);
  };

  return (
    <article className="CardItem">
      <header className="HeaderCardItem">
        <h3 className="HeaderName">{nombre}</h3>
      </header>

      <div className="detalles">
        <div className="imginfo">
          <img src={img} alt={nombre} className="ImgItem" />
        </div>
        <div className="info">
          <p className="ItemInfo">Descripción: {descripcion}</p>
          <p className="ItemInfo">Categoría: {categoria}</p>
          <p className="ItemInfo">$ {precio}</p>
        </div>
      </div>

      <footer className="ItemFooter">
        {cantidadAgregada > 0 ? (
          <div className="btnItemDetail">
            <Link to="/" className="btnSeguirComprando"> Volver al inicio </Link>
            <Link to="/cart" className="btnFinalizarCompra">
              Continuar
            </Link>
          </div>
        ) : (
          <ItemCount inicial={1} stock={stock} funcionAgregar={handleAgregar} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;

/* eslint-disable react/prop-types */
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardProducto">
      <img className="imgProducto" src={img} alt={nombre} />
      <h3 className="cardProductoName"> {nombre} </h3>
      <p className="precio"> $ {precio} </p>
      <p className="stock">Stock disponible: {stock}</p>
      <p> ID: {id} </p>
      <Link to={`/Item/${id}`} className="btnProducto">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;

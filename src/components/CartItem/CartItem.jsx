/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CarContext } from "../../context/CarContext";
import "./CartItem.css"

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarContext);

  return (
    <div className="contendedorCartItem">
      
      <h4>* {item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: $ {item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)} className="btnEliminarItem">
        Eliminar producto
      </button>
      <hr />
    </div>
  );
};

export default CartItem;

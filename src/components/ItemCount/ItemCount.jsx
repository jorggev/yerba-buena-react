/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contadorCantidad, setContadorCantidad] = useState(inicial);

  const incrementar = () => {
    if (contadorCantidad < stock) {
      setContadorCantidad(contadorCantidad + 1);
    }
  };

  const decrementar = () => {
    if (contadorCantidad > inicial) {
      setContadorCantidad(contadorCantidad - 1);
    }
  };

  return (
    <>
      <div className="divItemCount">
        <div className="contador">
        <button onClick={decrementar} className="Button">
          {" "}
          -{" "}
        </button>
        <p className="Number"> {contadorCantidad} </p>
        <button onClick={incrementar} className="Button">
          {" "}
          +{" "}
        </button>
        </div>

        <button onClick={() => funcionAgregar(contadorCantidad)} className="btnAgregar">
        {" "}
        Agregar al carrito{" "}
      </button>
      </div>

    </>
  );
};

export default ItemCount;

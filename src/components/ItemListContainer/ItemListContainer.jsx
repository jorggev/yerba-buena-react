/* eslint-disable react/prop-types */
/* const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
 */

import { useState, useEffect } from "react";
import { getProductos, getProductsByCat } from "../asynmock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const asyncFunc = idCategoria ? getProductsByCat : getProductos;

    asyncFunc(idCategoria)
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [idCategoria]);

  return (
    <div>
      <h3 className="subtituloPrincipal"> {greeting} </h3>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;

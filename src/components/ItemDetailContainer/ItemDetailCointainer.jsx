import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductosById } from "../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailCointainer = () => {
  const [producto, setProducto] = useState(null);

  const {itemId} = useParams()

/*   useEffect(() => {
    getProductosById(1).then((respuesta) => setProducto(respuesta));
  }, []); */


  useEffect(() => {
    getProductosById(itemId)
    .then( respuesta => {
      setProducto(respuesta)
    })
    .catch(error => console.error(error))
  }, [itemId])

  return (
    <div className="ItemDetailCointainer">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailCointainer;

/* eslint-disable react/prop-types */
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ nombre, img, categoria, stock, descripcion, precio }) => {
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
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;

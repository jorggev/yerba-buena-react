/* eslint-disable react/prop-types */

import "./Cart.css";
import { useContext } from "react";
import { CarContext } from "../../context/CarContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, vaciarCarrito, total, cantidadTotal } = useContext(CarContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h1>TU CARRITO ESTA VACIO</h1>
        <Link to="/"> Volver al incio </Link>
      </>
    );
  }


  return (
    <div className="cartContendor">
      <h2 className="resumenCart">RESUMEN DE TU COMPRA</h2>
      {cart.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <div className="contenedorProductosTotal">
        <h4>Productos agregados al carrito: {cantidadTotal}</h4>
        <h4>Total: ${total}</h4>
      </div>
      <div className="contendorBtnsCart">
        <button onClick={() => vaciarCarrito()} className="btnsCart">
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btnsCart">Ir al checkout</Link>
        <Link to="/" className="btnsCart"> Volver al incio </Link>
      </div>

    </div>
  );
};

export default Cart;

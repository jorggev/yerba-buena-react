import "./CartWidget.css";
import cart from "../../assets/cart.svg";
import { useContext } from "react";
import { CarContext } from "../../context/CarContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarContext);

  return (
    <div>
      <Link to="/cart">
        <img src={cart} alt="cart-widget" className="carritoImg" />
        {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
      </Link>
    </div>
  );
};

export default CartWidget;

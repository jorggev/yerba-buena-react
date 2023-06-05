import "./CartWidget.css";
import cart from "../../assets/cart.svg";

const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt="cart-widget" className="carritoImg" />
      <strong>0</strong>
    </div>
  );
};

export default CartWidget;

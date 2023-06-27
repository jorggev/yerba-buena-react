/* eslint-disable react/prop-types */
import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <button onClick={decrement} className="Button"> - </button>
      <p className="Number"> {quantity} </p>
      <button onClick={increment} className="Button"> + </button>
    </div>
  );
};

export default ItemCount;

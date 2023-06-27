import { useRef } from "react";

const UseRef = () => {
  const productosCarritos = useRef(0);

  const agrearAlCarrito = () => {
    productosCarritos.current = productosCarritos.current + 1;
    console.log(productosCarritos.current);
  };
  return (
    <>k
      <p>PRODUCTO AGREGADOS AL CARRITO: {productosCarritos.current} </p>
      <button onClick={agrearAlCarrito}>Agregar al carrito</button>
    </>
  );
};

export default UseRef;

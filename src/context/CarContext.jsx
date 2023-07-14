/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

// creo un contexto para almacenar toda la lógica del carrito de compras.

import { createContext, useState } from "react";

export const CarContext = createContext({
  cart: [],
  total: 0,
  cantidadTotal: 0,
});

// Creamo el componente CartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setToal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  console.log(cart);

  // Agregamos algunos métodos al proveedor de contexto para manipular el carrito de compras:

  // Funcion para agregar productos al carrito
  const agregarProducto = (item, cantidad) => {
    const productoExistente = cart.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCart((prev) => [...prev, { item, cantidad }]);

      setCantidadTotal((prev) => prev + cantidad);
      setToal((prev) => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = cart.map((producto) => {
        if (producto.item.id === item.id) {
          return { ...producto, cantidad: producto.cantidad + cantidad };
        } else {
          return producto;
        }
      });

      setCart(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setToal((prev) => item.precio * cantidad);
    }
  };

  // Funcion para remover productos del carrito
  const eliminarProducto = (id) => {
    const productoEliminado = cart.find((prod) => prod.item.id === id);
    const carritoActualizado = cart.filter((prod) => prod.item.id !== id);

    setCart(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setToal(
      (prev) =>
        prev - productoEliminado.item.precio * productoEliminado.cantidad
    );
  };

  // Funcion para vaciar el carrito
  const vaciarCarrito = () => {
    setCart([]);
    setCantidadTotal(0);
    setToal(0);
  };

  // Uso del componente CarritoContext.Provider para enviar el valor actual del carrito
  return (
    <CarContext.Provider
      value={{
        cart,
        total,
        cantidadTotal,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarContext;

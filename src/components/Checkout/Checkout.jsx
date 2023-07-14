/* eslint-disable react/jsx-key */
import { useState, useContext } from "react";
import { CarContext } from "../../context/CarContext";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/config";
import "./Checkout.css";

const Checkout = () => {
  const { cart, vaciarCarrito, cantidadTotal, total } = useContext(CarContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrdenId] = useState("");

  //Funciones y validaciones:

  const handleForm = (e) => {
    e.preventDefault();

    // Verificamos que los campos esten completos:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, complete todos los campos");
      return;
    }

    // Validamos los emails:
    if (email !== emailConfirmacion) {
      setError("UPS! Los campos del email no coinciden");
      return;
    }

    // Objeto de la orden

    const orden = {
      items: cart.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: cantidadTotal,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    // Se guarda la orden en la base de datos
    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id);

        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Error al crear la orden. Intente nuevamente");
          });
      })
      .catch((error) => {
        console.log("Error al actualizar el stock. Intente nuevamente", error);
        setError("Error al actualizar el stock. Intente nuevamente");
      });


      setNombre(nombre); 
  };

  return (
    <div className="contendorCheckout">
      <h2 className="tittleCheckout">CHECKOUT</h2>
      <form onSubmit={handleForm}>
        {cart.map((producto) => (
          <div key={producto.id} className="Checklist">
            <p className="productoCheckout">
              * {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio $ {producto.item.precio} </p>
          </div>
        ))}


        <p className="totalCompra">TOTAL: ${total}</p>

        <div className="formContainer">


          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="inputForm"
          />



          <label htmlFor="">Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="inputForm"
          />



          <label htmlFor="">Telefono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="inputForm"
          />



          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputForm"
          />



          <label htmlFor=""> Email de confirmación</label>
          <input
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
            className="inputForm"
          />


          {error && <p style={{ color: "red" }}> {error} </p>}

          <button type="sumbit" className="finCheckout">FINALIZAR COMPRA</button>


        </div>

      </form>

      {orderId && (
        <strong className="Gracias">
          ¡Muchas gracias por tu compra, {nombre}!
          <p className="Orden">
            Tu número de orden es <span>{orderId}</span>
          </p>
        </strong>
      )}
    </div>
  );
};

export default Checkout;

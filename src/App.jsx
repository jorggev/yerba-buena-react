import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailCointainer from "./components/ItemDetailContainer/ItemDetailCointainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CarContext";
import Cart from './components/Cart/Cart'
import Checkout from "./components/Checkout/Checkout";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"BIENVENIDOS AL MEJOR LUGAR PARA LOS AMANTES DEL MATE"} />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailCointainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path="*" element={<h1 className="errorFound">404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

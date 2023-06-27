import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailCointainer from "./components/ItemDetailContainer/ItemDetailCointainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting = {"BIENVENIDOS AL MEJOR LUGAR PARA LOS AMANTES DEL MATE"}/>} />
          <Route
            path="/category/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/Item/:itemId" element={<ItemDetailCointainer />} />

          <Route
            path="*"
            element={<h1 className="errorFound">404 NOT FOUND</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

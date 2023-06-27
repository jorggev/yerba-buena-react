import { useState, useEffect } from "react";

const Categorias = () => {
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    document.title = `Categoría ${categoria}`;
  }, [categoria]);

  const handleClick = (categoria) => {
    setCategoria(categoria);
  };

  return (
    <div>
      <h2>Categorias</h2>
      <button onClick={() => handleClick("Mates")}>Mates</button>
      <button onClick={() => handleClick("Termos")}>Termos</button>
      <button onClick={() => handleClick("Bombillas")}>Bombillas</button>
      <button onClick={() => handleClick("Yerbas")}>Yerbas</button>
      <button onClick={() => handleClick("Materas")}>Materas</button>
    </div>
  );
};

export default Categorias;

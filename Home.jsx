Código erróneo... rehacer


import React, { useState, useEffect } from "react";
import { getListas } from "../api/lapizza.api";
import Lista from "../components/Lista";

function Home() {
  const [listas, setListas] = useState([]);

  //controlamos la cantidad de recargas al iniciar en el navegador
  useEffect(() => {
    loadListas();
  }, []);

  async function loadListas() {
    const response = await getListas();
    setListas(response.data);
  }

  function renderMain() {
    if (listas.length === 0) return <h1>No existen productos disponibles</h1>;
    return listas.map((lista) => <Lista lapizza={lista} key={lista.codigo} />);
  }

  return (
    <div>
      <div className="home-container">
        <header></header>
        <section className="container">
          <div>{renderMain()}</div>
        </section>
      </div>
    </div>
  );
}

export default Home;

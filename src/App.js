import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [citas, setCitas] = useState([]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  //! const asignarEstadoError = (e) => {
  //!   if(e.target.className === "form-control is-valid") e.target.className = "form-control";
  //! };

  //* mensaje condicional
  // const titulo = citas.lenght === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      {/* HEADER */}
      <header className="d-flex justify-content-center text-center">
        <h1 className="my-5 text-dark titulo px-4">Control de citas</h1>
      </header>

      {/* SECCION TURNOS */}
      <main>
        <section className="container">
          <div className="row">
            <div className="col-6">
              <Formulario crearCita={crearCita} />
            </div>
            <div className="col-6">
              <h1>Hola mundo</h1>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default App;

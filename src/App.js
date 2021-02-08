import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoCitas from "./components/ListadoCitas";

function App() {
  
  //citas en el localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) citasIniciales = [];
  
  const [citas, setCitas] = useState(citasIniciales);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  useEffect(() => {
    if (citasIniciales) localStorage.setItem('citas', JSON.stringify(citas));
    else localStorage.setItem('citas', JSON.stringify([]));
  }, [citas, citasIniciales]);

 

  //! const asignarEstadoError = (e) => {
  //!   if(e.target.className === "form-control is-valid") e.target.className = "form-control";
  //! };

  //* mensaje condicional
  const titulo = citas.length === 0 ? "NO HAY CITAS" : "ADMINISTRA TUS CITAS";

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <Fragment>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

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
              <h2 className="text-center">{titulo}</h2>
              {citas.map((cita) => (
                <ListadoCitas
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default App;

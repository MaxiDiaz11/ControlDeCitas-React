import React, { Fragment } from "react";

const Formulario = () => {
  // mascota: "",
  //   propietario: "",
  //   fecha: "",
  //   hora: "",
  //   sintomas: "",
  return (
    <Fragment>
      <form className="border">
        <div className="mb-3">
          <label className="form-label">Mascota</label>
          <input
            type="text"
            className="form-control"
            name="mascota"
            placeholder="Nombre Mascota"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Propietario</label>
          <input
            type="text"
            className="form-control"
            name="propietario"
            placeholder="Nombre Propietario"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input type="date" className="form-control" name="fecha"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input type="time" className="form-control" name="hora"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Sintomas</label>
          <textarea
            class="form-control"
            placeholder="Sintomas"
            name="sintomas"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-3 w-100">Confirmar cita</button>
      </form>
    </Fragment>
  );
};

export default Formulario;

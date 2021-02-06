import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [inputValues, setValues] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const { mascota, propietario, fecha, hora, sintomas } = inputValues;

  const submitCita = (e) => {
    e.preventDefault();
    //validar campos
    if ([mascota, propietario, fecha, hora, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);
  };

  const validarCampo = (e) => {
    e.target.value === ""
      ? (e.target.className = "form-control is-invalid")
      : (e.target.className = "form-control is-valid");
  };

  return (
    <Fragment>
      <h2 className="text-center">Crear Cita</h2>
      {error ? (
        <div className="text-center error my-3">
          Todos los campos son obligatorios
        </div>
      ) : null}
      <form className="border p-3" onSubmit={submitCita}>
        <div className="mb-3">
          <label className="form-label">Mascota</label>
          <input
            type="text"
            className="form-control"
            name="mascota"
            placeholder="Nombre Mascota"
            onBlur={validarCampo}
          ></input>
          <div class="invalid-feedback">
            Debe ingresar el nombre de la mascota.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Propietario</label>
          <input
            type="text"
            className="form-control"
            name="propietario"
            placeholder="Nombre Propietario"
            onBlur={validarCampo}
          ></input>
          <div class="invalid-feedback">
            Debe ingresar el nombre del propietario.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            name="fecha"
            onBlur={validarCampo}
          ></input>
          <div class="invalid-feedback">
            Debe ingresar la fecha correspondiente a la cita.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="time"
            className="form-control"
            name="hora"
            onBlur={validarCampo}
          ></input>
          <div class="invalid-feedback">
            Debe ingresar la hora correspondiente a la cita.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Sintomas</label>
          <textarea
            class="form-control"
            placeholder="Sintomas"
            name="sintomas"
            onBlur={validarCampo}
          ></textarea>
          <div class="invalid-feedback">
            Debe ingresar los sintomas que correspondan.
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-3 w-100">
          Confirmar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;

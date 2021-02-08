import React, { Fragment, useState } from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const actualizarState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const submitCita = (e) => {
    e.preventDefault();
    //validar campos
    if ([mascota, propietario, fecha, hora, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    cita.id = uuid();

    crearCita(cita);

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
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
      <form className="p-3" onSubmit={submitCita}>
        <div className="mb-3">
          <label className="form-label">Mascota</label>
          <input
            type="text"
            className="form-control"
            name="mascota"
            placeholder="Nombre Mascota"
            onBlur={validarCampo}
            onChange={actualizarState}
            value={mascota}
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
            onChange={actualizarState}
            value={propietario}
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
            onChange={actualizarState}
            value={fecha}
          ></input>
          <div class="invalid-feedback">
            Debe ingresar la fecha correspondiente a la cita.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Hora</label>
          <input
            type="time"
            className="form-control"
            name="hora"
            onBlur={validarCampo}
            onChange={actualizarState}
            value={hora}
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
            onChange={actualizarState}
            value={sintomas}
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

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;

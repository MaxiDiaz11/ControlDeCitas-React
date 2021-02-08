import React from 'react';
import PropTypes from 'prop-types';

const ListadoCitas = ({cita, eliminarCita}) => {
    
    return ( 
        <div className="lista p-3 my-5 mx-2">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>

            <button type="button" className="btn btn-danger" onClick={() => eliminarCita(cita.id)}>Eliminar &times;</button>
        </div>
     );
}

ListadoCitas.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default ListadoCitas;
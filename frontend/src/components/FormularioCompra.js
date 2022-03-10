import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import '../assets/css/FormularioCompra.css';

function Formulario () {
    return (
        <div style={{margin:'auto'}}>Soy el formulario <FontAwesomeIcon className="error-icon" icon={faCircleXmark} /> </div>
    )
}
export default Formulario;
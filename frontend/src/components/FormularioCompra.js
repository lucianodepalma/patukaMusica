import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import '../assets/css/FormularioCompra.css';

function Formulario () {

    const [paises, setPaises] = useState([])

    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
        .then (response => response.json())
        .then(data => {
            setPaises(data)
        })
    }, []);


    return (
        <div className="">
            <h2>Detalle de facturación</h2>
            <form className="formulario" action="">
                <label><input placeholder="Nombre" type={"text"} name="nombre"/><FontAwesomeIcon className="error-icono" icon={faCircleXmark} /></label>
                <label><input placeholder="Apellido" type={"text"} name="apellido"/><FontAwesomeIcon className="error-icono" icon={faCircleXmark} /></label>
                <label><input placeholder="Dirección" type={"text"} name="direccion"/><FontAwesomeIcon className="error-icono" icon={faCircleXmark} /></label>
                <label><input placeholder="E-mail" type={"email"} name="email"/><FontAwesomeIcon className="error-icono" icon={faCircleXmark} /></label>
                <select>
                    {paises.map(elem => {
                        return (<option value={elem.name}>{elem.name}</option>);
                    })}
                </select>
                <input className="boton-compra" type={"submit"}/>
            </form>
        </div>
    )
}
export default Formulario;
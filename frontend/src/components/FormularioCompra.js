import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import '../assets/css/FormularioCompra.css';

function Formulario () {

    const [paises, setPaises] = useState([]);
    const [nombre, setNombre] = useState([]);
    const [apellido, setApellido] = useState([]);
    const [provincia, setProvincia] = useState([]);
    const [direccionFactura, setDireccionFactura] = useState([]);
    const [direccionEntrega, setDireccionEntrega] = useState([]);
    const [email, setEmail] = useState([]);
    const [cantidadProductos, setCantidadProductos] = useState([]);
    const [precioProducto, setPrecioProducto] = useState(3700);

    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
        .then (response => response.json())
        .then(data => {
            setPaises(data)
        })
    }, []);

    const cambiarNombre = (e) => {
        const value=e.target.value;
        setNombre(value);
    }
    const cambiarApellido = (e) => {
        const value=e.target.value;
        setNombre(value);
    }

    const cambiarPrecioProducto = (e) => {
        const value = e.target.value;
        setPrecioProducto (value*3700)
    }

    const enviar = (e) => {
        
    }


    return (
        <div className="">
            <h2>Detalle de facturación</h2>
            <form className="formulario" action="">
                <label><input placeholder="Nombre" type={"text"} name="nombre" onMouseLeave={cambiarNombre}/></label>
                <label><input placeholder="Apellido" type={"text"} name="apellido" onMouseLeave={cambiarApellido}/></label>
                <select className="pais">
                    {paises.map(elem => {
                        return (<option value={elem.name}>{elem.name}</option>);
                    })}
                </select>
                <label><input placeholder="Provincia" type={"text"} name="provincia"/></label>
                <label><input placeholder="Dirección de facturación" type={"text"} name="direccion-factura"/></label>
                <label><input placeholder="Dirección de entrega" type={"text"} name="direccion-entrega"/></label>
                <label><input placeholder="E-mail" type={"email"} name="email"/></label>
                <div className="cantidad-de-productos"><label>Cantidad de productos </label>
                <select onChange={cambiarPrecioProducto}>
                    <option value={'1'} selected>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                </select></div>
                <label>Precio final: ${precioProducto}</label>
                <input className="boton-compra" type={"submit"} onClick={enviar}/>
            </form>
        </div>
    )
}
export default Formulario;
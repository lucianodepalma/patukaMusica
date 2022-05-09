import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../assets/css/FormularioCompra.css';
/* Custom hooks */
import { validateField, validateEmail } from '../utils/useValidation';

function Formulario () {

    const [paises, setPaises] = useState([]);
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorDNI, setErrorDNI] = useState(false);
    const [errorProvincia, setErrorProvincia] = useState(false);
    const [errorDireccionFactura, setErrorDireccionFactura] = useState(false);
    const [errorDireccionEntrega, setErrorDireccionEntrega] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [precioProducto, setPrecioProducto] = useState(3700);
    const [fail, setFail] = useState(true)
    const form = useRef();
    const errors = {
        errorNombre: 'Tienes que introducir tu nombre.',
        errorApellido: 'Tienes que introducir tu apellido.',
        errorProvincia: 'Tienes que introducir tu provincia.',
        errorDNI: 'Tienes que introducir tu DNI.',
        errorDireccionFactura: 'Tienes que introducir una dirección de facturación.',
        errorDireccionEntrega: 'Tienes que introducir una dirección de entrega.',
        errorEmail: 'Tienes que introducir tu dirección de email.'
    };

    useEffect( () => {
        fetch ('https://restcountries.com/v2/all')
        .then (response => response.json())
        .then (data => {
            setPaises(data)
        })
    }, []);

    const cambiarNombre = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorNombre (true);
            return;
        } else {
            setErrorNombre (false);

        }
    }

    const cambiarApellido = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorApellido (true);
            return;
        } else {
            setErrorApellido (false);
        }
    }

    const cambiarDNI = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorDNI (true);
            return;
        } else {
            setErrorDNI (false);
        }
    }

    const cambiarProvincia = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorProvincia (true);
            return;
        } else {
            setErrorProvincia (false);
        }
    }

    const cambiarDireccionFactura = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorDireccionFactura (true);
            return;
        } else {
            setErrorDireccionFactura (false);
        }
    }

    const cambiarDireccionEntrega = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorDireccionEntrega (true);
            return;
        } else {
            setErrorDireccionEntrega (false);
        }
    }

    const cambiarEmail = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorEmail (true);
            return;
        } else {
            setErrorEmail (false);
        }
    }

    const cambiarPrecioProducto = (e) => {
        const value = e.target.value;
        setPrecioProducto (value*3700)
    }

    //Metodo para comprobar si alguno de los campos tenga error cuando envian el formulario, si hay error devuelve true.
    const comprobarErrores = () => {
        if(errorNombre || errorApellido || errorDNI || errorProvincia || errorDireccionEntrega || errorDireccionFactura || errorEmail) {
            return true
        } else {
            return false
        }
    }

    const enviar = (e, req, res) => {
        e.preventDefault();

        if (!comprobarErrores) {
            emailjs.sendForm('service_3okwr8s', 'template_qcok7kf', form.current, 'AR1smxZMOiEXukHUr')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
            
        } else {
            
        }

    }

    return (
        <div className="">
            <h2>Detalle de facturación</h2>
            <form className="formulario" ref={form} onSubmit={enviar}>
                <label><input placeholder="Nombre" type={"text"} name="nombre" onMouseLeave={cambiarNombre}/></label>
                {errorNombre ? <span className="error">{errors.errorNombre}</span>:<span></span>}
                <label><input placeholder="Apellido" type={"text"} name="apellido" onMouseLeave={cambiarApellido}/></label>
                {errorApellido ? <span className="error">{errors.errorApellido}</span>:<span></span>}
                <select name="pais" className="pais">
                    <option selected>País</option>
                    {paises.map(elem => {
                        return (<option value={elem.name}>{elem.name}</option>);
                    })}
                </select>
                <label><input placeholder="DNI" type={"number"} name="dni" onMouseLeave={cambiarDNI}/></label>
                {errorDNI ? <span className="error">{errors.errorDNI}</span>:<span></span>}
                <label><input placeholder="Provincia" type={"text"} name="provincia" onMouseLeave={cambiarProvincia}/></label>
                {errorProvincia ? <span className="error">{errors.errorProvincia}</span>:<span></span>}
                <label><input placeholder="Dirección de facturación" type={"text"} name="direccion-factura" onMouseLeave={cambiarDireccionFactura}/></label>
                {errorDireccionFactura ? <span className="error">{errors.errorDireccionFactura}</span>:<span></span>}
                <label><input placeholder="Dirección de entrega" type={"text"} name="direccion-entrega" onMouseLeave={cambiarDireccionEntrega}/></label>
                {errorDireccionEntrega ? <span className="error">{errors.errorDireccionEntrega}</span>:<span></span>}
                <label><input placeholder="E-mail" type={"email"} name="email" onMouseLeave={cambiarEmail}/></label>
                {errorEmail ? <span className="error">{errors.errorEmail}</span>:<span></span>}
                <div className="cantidad-de-productos"><label>Cantidad de productos </label>
                {/* se pueden comprar hasta 3 libros a la vez */}
                <select name="cantidad" onChange={cambiarPrecioProducto}>
                    <option value={'1'} selected>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                </select></div>
                <label>Precio final: ${precioProducto}</label>
                <button className="boton-compra" type="submit" value="Pagar">Pagar</button>
            </form>
        </div>
    )
}
export default Formulario;
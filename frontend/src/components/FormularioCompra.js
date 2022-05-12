import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../assets/css/FormularioCompra.css';

function Formulario () {

    const [paises, setPaises] = useState([]);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [pais, setPais] = useState('pais');
    const [dni, setDNI] = useState('');
    const [provincia, setProvincia] = useState('');
    const [direccionFactura, setDireccionFactura] = useState('');
    const [direccionEntrega, setDireccionEntrega] = useState('');
    const [email, setEmail] = useState('');
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorPais, setErrorPais] = useState(false);
    const [errorDNI, setErrorDNI] = useState(false);
    const [errorProvincia, setErrorProvincia] = useState(false);
    const [errorDireccionFactura, setErrorDireccionFactura] = useState(false);
    const [errorDireccionEntrega, setErrorDireccionEntrega] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [fail, setFail] = useState(true);
    const [precioProducto, setPrecioProducto] = useState(3700);
    const form = useRef();
    const errors = {
        nombre: 'Tienes que introducir tu nombre.',
        apellido: 'Tienes que introducir tu apellido.',
        pais: 'Tienes que seleccionar tu país.',
        dni: 'Tienes que introducir tu DNI.',
        provincia: 'Tienes que introducir tu provincia.',
        direccionFactura: 'Tienes que introducir una dirección de facturación.',
        direccionEntrega: 'Tienes que introducir una dirección de entrega.',
        email: 'Tienes que introducir tu dirección de email.'
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
            setNombre (value);
            setErrorNombre (false);
        }
    }

    const cambiarApellido = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorApellido (true);
            return;
        } else {
            setApellido (value);
            setErrorApellido (false);
        }
    }

    
    const cambiarPais = (e) => {
        const value = e.target.value
        if(value === 'pais') {
            setErrorPais (true);
        } else {
            setPais (value);
            setErrorPais (false);
        }
    }

    const cambiarDNI = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorDNI (true);
            return;
        } else {
            setDNI (value);
            setErrorDNI (false);
        }
    }

    const cambiarProvincia = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorProvincia (true);
            return;
        } else {
            setProvincia (value);
            setErrorProvincia (false);
        }
    }

    const cambiarDireccionFactura = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorDireccionFactura (true);
            return;
        } else {
            setDireccionFactura (value);
            setErrorDireccionFactura (false);
        }
    }

    const cambiarDireccionEntrega = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorDireccionEntrega (true);
            return;
        } else {
            setDireccionEntrega (value);
            setErrorDireccionEntrega (false);
        }
    }

    const cambiarEmail = (e) => {
        const value=e.target.value;
        if(!value.trim()) {
            setErrorEmail (true);
            return;
        } else {
            setEmail (value);
            setErrorEmail (false);
        }
    }

    const cambiarPrecioProducto = (e) => {
        const value = e.target.value;
        setPrecioProducto (value*3700)
    }

    
    const enviar = (e) => {
        e.preventDefault();

        if(!nombre.trim()) {
            setErrorNombre(true)
        }
        if (!apellido.trim()) {
            setErrorApellido(true)
        }
        if (!dni.trim()) {
            setErrorDNI(true)
        }
        if (pais === 'pais') {
            setErrorPais(true)
        }
        if (!provincia.trim()) {
            setErrorProvincia(true)
        }
        if (!direccionEntrega.trim()) {
            setErrorDireccionEntrega(true)
        }
        if (!direccionFactura.trim()) {
            setErrorDireccionFactura(true)
        }
        if (!email.trim()) {
            setErrorEmail(true)
        }

        if(errorNombre || errorApellido || errorDNI || errorPais || errorProvincia || errorDireccionEntrega || errorDireccionFactura || errorEmail) {
            setFail(true);
        } else {
            setFail(false);
        }

        if (!fail) {
            console.log('envie el mail');
        } else {
            console.log('hay errores');
        }

    }
        /* emailjs.sendForm('service_3okwr8s', 'template_qcok7kf', form.current, 'AR1smxZMOiEXukHUr')
            .then((result) => {
            console.log(result.text);
            }, (error) => {
            console.log(error.text);
        }); */
    return (
        <div>
            <h2>Detalle de facturación</h2>
            <form className="formulario" ref={form} onSubmit={enviar}>
                <label><input placeholder="Nombre" type={"text"} name="nombre" onChange={cambiarNombre}/></label>
                {errorNombre ? <span className="error">{errors.nombre}</span>:<span></span>}
                <label><input placeholder="Apellido" type={"text"} name="apellido" onChange={cambiarApellido}/></label>
                {errorApellido ? <span className="error">{errors.apellido}</span>:<span></span>}
                <select name="pais" className="pais" onChange={cambiarPais}>
                    <option selected value='pais'>País</option>
                    {paises.map(elem => {
                        return (<option value={elem.name}>{elem.name}</option>);
                    })}
                </select>
                {errorPais ? <span className="error">{errors.pais}</span>:<span></span>}
                <label><input placeholder="DNI" type="text" name="dni" onChange={cambiarDNI}/></label>
                {errorDNI ? <span className="error">{errors.dni}</span>:<span></span>}
                <label><input placeholder="Provincia" type={"text"} name="provincia" onChange={cambiarProvincia}/></label>
                {errorProvincia ? <span className="error">{errors.provincia}</span>:<span></span>}
                <label><input placeholder="Dirección de facturación" type={"text"} name="direccion-factura" onChange={cambiarDireccionFactura}/></label>
                {errorDireccionFactura ? <span className="error">{errors.direccionFactura}</span>:<span></span>}
                <label><input placeholder="Dirección de entrega" type={"text"} name="direccion-entrega" onChange={cambiarDireccionEntrega}/></label>
                {errorDireccionEntrega ? <span className="error">{errors.direccionEntrega}</span>:<span></span>}
                <label><input placeholder="E-mail" type="email" name="email" onChange={cambiarEmail}/></label>
                {errorEmail ? <span className="error">{errors.email}</span>:<span></span>}
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
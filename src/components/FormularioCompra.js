import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../assets/css/FormularioCompra.css';

function Formulario () {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDNI] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [cp, setCP] = useState('');
    const [direccionFactura, setDireccionFactura] = useState('');
    const [direccionEntrega, setDireccionEntrega] = useState('');
    const [email, setEmail] = useState('');
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorDNI, setErrorDNI] = useState(false);
    const [errorProvincia, setErrorProvincia] = useState(false);
    const [errorLocalidad, setErrorLocalidad] = useState(false);
    const [errorCP, setErrorCP] = useState(false);
    const [errorDireccionFactura, setErrorDireccionFactura] = useState(false);
    const [errorDireccionEntrega, setErrorDireccionEntrega] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorValidEmail, setErrorValidEmail] = useState(false);
    const [fail, setFail] = useState(true);
    const [precioProducto, setPrecioProducto] = useState(2850);
    const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const form = useRef();
    const errors = {
        nombre: 'Tienes que introducir tu nombre.',
        apellido: 'Tienes que introducir tu apellido.',
        dni: 'Tienes que introducir tu DNI.',
        provincia: 'Tienes que introducir tu provincia.',
        localidad: 'Tienes que introducir tu localidad.',
        cp: 'Tienes que introducir tu código postal.',
        direccionFactura: 'Tienes que introducir una dirección de facturación.',
        direccionEntrega: 'Tienes que introducir una dirección de entrega.',
        email: 'Tienes que introducir tu dirección de email.',
        validEmail: 'Tienes que introducir un correo electrónico válido'
    };

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
    
    const cambiarLocalidad = (e) => {
        const value = e.target.value
        if(!value.trim()) {
            setErrorLocalidad (true);
            return;
        } else {
            setLocalidad (value);
            setErrorLocalidad (false);
        }
    }
    
    const cambiarCP = (e) => {
        const value = e.target.value
        if(!value.trim()) {
            setErrorCP (true);
        } else {
            setCP (value);
            setErrorCP (false);
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
        } else if (!isValidEmail.test(value)) {
            setEmail(value);
            setErrorEmail(false);
            setErrorValidEmail(true);
        } else {
            setEmail(value);
            setErrorEmail(false);
            setErrorValidEmail(false);
        }
    }

    const cambiarPrecioProducto = (e) => {
        const value = e.target.value;
        setPrecioProducto (value*2850)
    }

    const comprobarErrores = () => {

        if(!nombre.trim()) {
            setErrorNombre(true);
        }
        if (!apellido.trim()) {
            setErrorApellido(true);
        }
        if (!dni.trim()) {
            setErrorDNI(true);
        }
        if (!provincia.trim()) {
            setErrorProvincia(true);
        }
        
        if (!localidad.trim()) {
            setErrorLocalidad(true);
        }
        
        if (!cp.trim()) {
            setErrorCP(true);
        }
        if (!direccionEntrega.trim()) {
            setErrorDireccionEntrega(true);
        }
        if (!direccionFactura.trim()) {
            setErrorDireccionFactura(true);
        }
        if (!email.trim()) {
            setErrorEmail(true);
        } else if (!isValidEmail.test(email)) {
            setErrorEmail(false);
            setErrorValidEmail(true);
        };

        if(!nombre.trim() || !apellido.trim() || !dni.trim() || !provincia.trim() || !localidad.trim() || !cp.trim() || !direccionEntrega.trim() || !direccionFactura.trim() || !email.trim()) {
            setFail(true);
        } else  if (errorNombre || errorApellido || errorDNI || errorProvincia || errorLocalidad || errorCP || errorDireccionEntrega || errorDireccionFactura || errorEmail || errorValidEmail || errorValidEmail){
            setFail(true);
        } else {
            setFail(false);
        }

    }

    const enviar = (e) => {
        e.preventDefault();

        if (!fail) {
            emailjs.sendForm('service_3okwr8s', 'template_qcok7kf', form.current, 'AR1smxZMOiEXukHUr')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            
            if(precioProducto === 2290) {
                window.location.href = "https://mpago.la/2oLRk45";
            } else if (precioProducto === 4580) {
                window.location.href = "https://mpago.la/32pfZh7";
            } else {
                window.location.href = "https://mpago.la/22isJWZ";
            }
        }
    }

    return (
        <div className="formularioCompra">
            <h2>Info de contacto</h2>
            <form className="formulario" ref={form} onSubmit={enviar}>
                <label><input placeholder="Nombre" type={"text"} name="nombre" onChange={cambiarNombre}/></label>
                {errorNombre ? <span className="error">{errors.nombre}</span>:<span></span>}

                <label><input placeholder="Apellido" type={"text"} name="apellido" onChange={cambiarApellido}/></label>
                {errorApellido ? <span className="error">{errors.apellido}</span>:<span></span>}

                <label><input placeholder="DNI" type="text" name="dni" onChange={cambiarDNI}/></label>
                {errorDNI ? <span className="error">{errors.dni}</span>:<span></span>}

                <label><input placeholder="Provincia" type={"text"} name="provincia" onChange={cambiarProvincia}/></label>
                {errorProvincia ? <span className="error">{errors.provincia}</span>:<span></span>}

                <label><input placeholder="Localidad" type={"text"} name="localidad" onChange={cambiarLocalidad}/></label>
                {errorLocalidad ? <span className="error">{errors.localidad}</span>:<span></span>}

                <label><input placeholder="Código postal" type={"text"} name="cp" onChange={cambiarCP}/></label>
                {errorCP ? <span className="error">{errors.cp}</span>:<span></span>}

                <label><input placeholder="Dirección de facturación" type={"text"} name="direccion-factura" onChange={cambiarDireccionFactura}/></label>
                {errorDireccionFactura ? <span className="error">{errors.direccionFactura}</span>:<span></span>}

                <label><input placeholder="Dirección de entrega" type={"text"} name="direccion-entrega" onChange={cambiarDireccionEntrega}/></label>
                {errorDireccionEntrega ? <span className="error">{errors.direccionEntrega}</span>:<span></span>}

                <label><input placeholder="E-mail" type="text" name="email" onChange={cambiarEmail}/></label>
                {errorEmail ? <span className="error">{errors.email}</span>: errorValidEmail ? <span className="error">{errors.validEmail}</span>:<span></span>}

                <div className="cantidad-de-productos"><label>Cantidad de productos </label>
                {/* se pueden comprar hasta 3 libros a la vez */}
                <select name="cantidad" onChange={cambiarPrecioProducto}>
                    <option value={'1'} selected>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                </select></div>
                
                <label>Precio con envío incluido: ${precioProducto}</label>
                <button className="boton-compra" type="submit" value="Pagar" onClick={comprobarErrores}>Pagar</button>
            </form>
        </div>
    )
}
export default Formulario;
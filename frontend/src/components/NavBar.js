import React from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom'

function NavBar () {

    return (
        <div className='navBar'>
            <Link to='/'><div>Fiesta Selvática</div></Link>
            <Link to='/redes'><div>Redes Sociales</div></Link>
            <Link to='/descargas'><div>Descargas</div></Link>
        </div>
    )

}

export default NavBar;
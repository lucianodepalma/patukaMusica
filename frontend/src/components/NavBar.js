import React from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom'

function NavBar () {

    return (
        <div className='navBar'>
            <Link to='/'><div className='navButton'>Fiesta Selvática</div></Link>
            <Link to='/redes'><div className='navButton'>Redes Sociales</div></Link>
            <Link to='/descargas'><div className='navButton'>Descargas</div></Link>
        </div>
    )

}

export default NavBar;
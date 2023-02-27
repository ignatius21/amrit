import React from 'react';
import Link from 'react-router-dom';

function Navegacion2() {
    
    return (
        <nav className='navbar justify-content-center mt-3'>
            <ul className="nav mt-2 footer2">
                <li className="nav-item">
                    <Link className="nav-link cta2" aria-current="page" to="/contacto"><span className='hover-underline-animation2'>contacto</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link cta2" to="/productos"><span className='hover-underline-animation2'>productos</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link cta2" to="/nosotros"><span className='hover-underline-animation2'>nosotros</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link cta2" to="/galeria"><span className='hover-underline-animation2'>galeria</span></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navegacion2
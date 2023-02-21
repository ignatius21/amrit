import React from 'react';

function Navegacion2() {
    
    return (
        <nav className='navbar justify-content-center mt-3'>
            <ul className="nav mt-2 footer2">
                <li className="nav-item">
                    <a className="nav-link cta2" aria-current="page" href={"/contacto"}><span className='hover-underline-animation2'>contacto</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link cta2" href="/productos"><span className='hover-underline-animation2'>productos</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link cta2" href="/nosotros"><span className='hover-underline-animation2'>nosotros</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link cta2" href="/galeria"><span className='hover-underline-animation2'>galeria</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navegacion2
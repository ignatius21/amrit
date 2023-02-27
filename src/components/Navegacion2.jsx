
import {Link} from 'react-router-dom';

function Navegacion2() {
    
    return (
        <nav className='navbar justify-content-center mt-3'>
            <ul className="nav mt-2 footer2">
                <li className="nav-item">
                    <Link className="nav-link cta2" aria-current="page" to="/contacto" onClick={() => window.scrollTo(0, 0)}><span className='hover-underline-animation2'>contacto</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link cta2" to="/productos" onClick={() => window.scrollTo(0, 0)}><span className='hover-underline-animation2'>productos</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link cta2" to="/nosotros" onClick={() => window.scrollTo(0, 0)}><span className='hover-underline-animation2'>nosotros</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link cta2" to="/galeria" onClick={() => window.scrollTo(0, 0)}><span className='hover-underline-animation2'>galeria</span></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navegacion2
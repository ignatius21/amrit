import {useLocation,Link} from 'react-router-dom';


function Navegacion() {
    const location = useLocation();
    
    
    return (
        <>

            <nav className='navbar justify-content-center' >
                <ul className="nav mt-2">
                    <li className="nav-item">
                        <Link className="nav-link cta" aria-current="page" to="/" onClick={()=> window.scrollTo(0,0)} ><span className={`${location.pathname === '/' ? 'hover-underline-animation' : 'hover-underline-animation'}`}>inicio</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link cta" to="/productos" onClick={()=> window.scrollTo(0,0)}><span className={`${location.pathname === '/' ? 'hover-underline-animation' : 'hover-underline-animation'}`}>productos</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link cta" to="/nosotros" onClick={()=> window.scrollTo(0,0)}><span className={`${location.pathname === '/' ? 'hover-underline-animation' : 'hover-underline-animation'}`}>nosotros</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link cta" to="/galeria" onClick={()=> window.scrollTo(0,0)} ><span className={`${location.pathname === '/' ? 'hover-underline-animation' : 'hover-underline-animation'}`}>galeria</span></Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navegacion
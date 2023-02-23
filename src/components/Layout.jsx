import {Outlet} from 'react-router-dom';
import Navegacion from './Navegacion';
import Footer from './Footer';
import {useLocation} from 'react-router-dom';
import bg4 from '../img/bg5.webp';
import Fade from './Fade';


function Layout() {
    const location = useLocation();
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function () {
        let desplazamiento_actual = window.pageYOffset;
        if (ubicacionPrincipal >= desplazamiento_actual) {
            document.getElementById('header').style.top = '0';
        } else {
            document.getElementById('header').style.top = '-100px'
        }
        ubicacionPrincipal = desplazamiento_actual;
    };
 
    return (
        <>
            <Fade>
                <div  className={`${location.pathname === '/' ? 'contenedor-header' : 'visually-hidden'}`}>
                    <p className='parrafoLicores top-50 start-50 translate-middle text-uppercase'>licores</p>
                    <p className='position-absolute top-50 start-50 translate-middle amrit'>AMRIT</p>
                    <img src={bg4} alt="imagen de fondo de presentacion" className='bg4' />
                </div>
                <header className='header bg-dark' id='header'>
                    <Navegacion />
                </header>
                <Outlet />
                <Footer />
            </Fade>

        </>
    )
}

export default Layout
import logo from '../img/logo AMRIT.webp';
import imagen1 from '../img/12.webp';
import imagen2 from '../img/licorMani7.webp';
import imagen3 from '../img/logo2.webp';
import {motion} from 'framer-motion';
import { NavLink,Link } from 'react-router-dom';


function Inicio() {
   return (
    <>

      {/*SECCION 1 */}

      <motion.div 
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.8,delay:.3}} 
          className='col-6 p-3 mt-5'>
        <h2 
          className="container-fluid texto">En Amrit producimos licores de primer nivel; nuestra misión es mostrar
          lo mejor de la naturaleza y sus componentes en una mezcla original y unica, dandole el tiempo justo en su preparación.</h2>
        <div className='botones2 mt-5'>
          <a className='btn btn-licores2 border-0 text-uppercase d-flex justify-content-center align-items-center'
            href='/nosotros'>conozcanos</a>
        </div>
      </motion.div>
      <div className='o-row'>
        <div className='o-col -center -bottom'>
          <motion.div initial={{opacity:0}}
            whileInView={{opacity:.1}}
            transition={{duration:.6,delay:.6}}
            className='logo mt-3'>
            <img src={logo} alt="imagen logo" className='container-fluid contenedor-logo' />
          </motion.div>
        </div>
      </div>


      {/* SECCION 2 */}

      <div className="row container-fluid m-auto">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card mb-3 mt-3">
            <div className="card-body p-0">
              <img src={imagen1} alt="imagen producto" className='tarjeta1' />
            </div>
          </div>
          <button className='mb-3'>
            <a href={'/productos'} className='botonEnlace'><p className='display-5'>licores</p></a>
            <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
        <div className="col-sm-6">
          <div className="card mb-3 mt-3">
            <div className="card-body p-0">
              <img src={imagen2} alt="imagen producto" className='tarjeta1' />
            </div>
          </div>
          <button>
            <a href='/galeria' className='botonEnlace'><p className='display-5'>Galeria</p></a>
            <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* SECCION 3*/}

      <div className='contenedorImagen'>
        <div className='container contenedorTextoLicor text-center'>
          <p className='text-uppercase'>licores</p>
        </div>
        <div className='contenedorImagenAmrit container-fluid'>
          <img src={imagen3} alt="logotipo" className='imagenLogotipoAmrit' />
        </div>
      </div>
    </>
    
  )
}

export default Inicio
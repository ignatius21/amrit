import imagenNosotros from '../img/licorMani8.webp';
import cardNosotros1 from '../img/11.webp';
import cardNosotros2 from '../img/7.webp';
import {motion} from 'framer-motion';
import cardNosotros3 from '../img/fondoNosotros.webp';
import fotoPerfil from '../img/fotoPerfil2.webp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import {Parallax} from 'react-scroll-parallax';


function Nosotros() {
  
    return (
      <>
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 3.3 }} viewport={{ once: true }} className="text-center text-uppercase display-1 nosotros-texto-encabezado">conozca amrit</motion.h1>
        <div className="container text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 3.4 }} viewport={{ once: true }} className="nosotrosTexto fs-3">AMRIT fue fundada en 2021 por entusiastas de la licoreria artesanal. De esta pasión nació el nombre de AMRIT, que en sánscrito significa <span className='colorSpan '>'inmortal'</span>, asociado a la bebida de la inmortalidad.</motion.p>
        </div>
        <Parallax speed={3}>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: 3.6, ease: 'easeInOut' }} src={imagenNosotros} alt="imagen licor nosotros" className="img-fluid container d-flex rounded-5" />
        </Parallax>
        <div className='container text-center'>
          <p className='container mt-5 fs-3 nosotrosTexto'>Los licores Amrit rápidamente dejan su huella entre las primeras personas en probar la creciente locura por los licores artesanales. Gracias a su deseo de resaltar los recursos que componen la riqueza de sus ingredientes, los licores empezaron a comercializarse por primera vez dando lugar a su principal bebida, el limoncello, que fue un éxito entre los amantes de los licores artesanales con sabores bien definidos.
            Más tarde, nació el reconocido licor crema de café, que confirma la versatilidad y el saber hacer del equipo de licores de Amrit.</p>
        </div>

        <div className='container mt-5'>
          <div className='row container'>
            <motion.div initial={{ opacity: 0, y: -40 }} transition={{ duration: 1, delay: .5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className='col'>
              <img src={cardNosotros1} alt="imagen card licores nosotros" className='img-thumbnail border-0 bg-transparent rounded-5' />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} transition={{ duration: 1, delay: .5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className='col'>
              <img src={cardNosotros2} alt="imagen card licores nosotros" className='img-thumbnail border-0 bg-transparent rounded-5' />
            </motion.div>
          </div>
        </div>

        <div className='container'>
          <div className='d-flex'>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .4 }} viewport={{ once: true }} className='text-uppercase display-3 textoNaturaleza'>lo mejor de la naturaleza</motion.p>
          </div>
        </div>
        <div className='container'>
          <div className='row parrafoNosotros'>
            <div className='col container'>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .6, ease: 'circOut' }} viewport={{ once: true }}>En poco tiempo, Amrit ofrece una amplia selección de licores listos para beber. El objetivo: ofrecer productos de primera calidad, inspirados tanto en los grandes clásicos como en la naturaleza que nos rodea… lejos de los caminos trillados.</motion.p>
            </div>
            <div className='col container'>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .9, ease: 'circOut' }} viewport={{ once: true }}>Para saborear lo mejor que la naturaleza ofrecemos nuestros mejores licores, los cuales son excelentes compañeros para su aventura.<br></br><br></br>
                ¡Es hora de planificar tu próxima escapada!</motion.p>
            </div>
          </div>
        </div>

        <div className='container mt-3'>
          <img src={cardNosotros3} alt="imagen productos naturales" className='img-thumbnail border-0 bg-transparent' />
        </div>

        <div className='container'>
          <div className='d-flex'>
            <p className='text-uppercase textoEquipo ps-1'>staff</p>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .7, delay: .4 }} src={fotoPerfil} alt="" className='img-thumbnail border-0 bg-transparent rounded-4' />
            </div>
            <div className='col'>
              <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .3, ease: 'circOut' }} viewport={{ once: true }} className='text-uppercase textoPerfil'>rodrigo bertram</motion.p>
              <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .7, ease: 'circOut' }} viewport={{ once: true }} className='text-uppercase textoCargo'>fundador / director innovacion</motion.p>
              <motion.a initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .9, ease: 'circOut' }} viewport={{ once: true }} href='https://www.instagram.com/rodrigo.bertram.85/' target={'_blank'}><FontAwesomeIcon icon={faSquareInstagram} className='iconoInstagram p-3' /></motion.a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Nosotros
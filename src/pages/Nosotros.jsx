import imagenNosotros from '../img/licorMani8.webp';
import cardNosotros1 from '../img/11.webp';
import cardNosotros2 from '../img/7.webp';
import {motion} from 'framer-motion';
import cardNosotros3 from '../img/fondoNosotros.webp';
import fotoPerfil from '../img/fotoPerfil2.webp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import {Parallax} from 'react-scroll-parallax'
import { useEffect } from 'react';


function Nosotros() {
  
    return (
    <>
      <motion.h1 initial={{opacity:0,}} whileInView={{opacity:1}} transition={{duration:1,delay:1.2}} viewport={{once:true}} className="text-center text-uppercase display-1 nosotros-texto-encabezado">conozca amrit</motion.h1>
      <div className="container text-center">
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:1.3}} viewport={{once:true}} className="nosotrosTexto fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit consequatur consectetur quo dignissimos molestias laudantium omnis dolorem nostrum sint, quisquam mollitia commodi placeat saepe excepturi autem pariatur aspernatur optio.</motion.p>
      </div>
      <Parallax speed={3}>
      <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7,delay:1.7}} src={imagenNosotros} alt="imagen licor nosotros" className="img-fluid container d-flex rounded-5" />
      </Parallax>
      <div className='container text-center'>
        <p className='container mt-5 fs-3 nosotrosTexto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore corporis at asperiores dolores maxime id tempora totam officiis aperiam, itaque minima pariatur, quas magni incidunt aliquid amet ad? Beatae?</p>
      </div>

      <div className='container mt-5'>
        <div className='row container'>
          <motion.div initial={{opacity:0,y:-40}} transition={{duration:1,delay:.5}} whileInView={{opacity:1,y:0}} viewport={{once:false}} className='col'>
            <img src={cardNosotros1} alt="imagen card licores nosotros" className='img-thumbnail border-0 bg-transparent rounded-5' />
          </motion.div>
          <motion.div initial={{opacity:0,y:40}} transition={{duration:1,delay:.5}} whileInView={{opacity:1,y:0}} viewport={{once:false}} className='col'>
            <img src={cardNosotros2} alt="imagen card licores nosotros" className='img-thumbnail border-0 bg-transparent rounded-5' />
          </motion.div>
        </div>
      </div>

      <div className='container'>
        <div className='d-flex'>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.5,delay:.4}} viewport={{once:true}} className='text-uppercase display-3 textoNaturaleza'>lo mejor de la naturaleza</motion.p>
        </div>
      </div>
      <div className='container'>
        <div className='row parrafoNosotros'>
          <div className='col container'>
            <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.5,delay:.6,ease:'circOut'}} viewport={{once:true}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium quisquam non ratione commodi cumque error ut fugit alias hic nemo molestias repellat, distinctio incidunt animi nihil est et quam!
            Totam quos necessitatibus odit.</motion.p>
          </div>
          <div className='col container'>
            <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.5,delay:.9,ease:'circOut'}} viewport={{once:true}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium quisquam non ratione commodi cumque error ut fugit alias hic nemo molestias repellat, distinctio incidunt animi nihil est et quam!
            Totam quos necessitatibus odit.</motion.p>
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
            <motion.img initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.7,delay:.4}} src={fotoPerfil} alt="" className='img-thumbnail border-0 bg-transparent rounded-4'/>
          </div>
          <div className='col'>
            <motion.p initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:.5,delay:.3,ease:'circOut'}} viewport={{once:true}} className='text-uppercase textoPerfil'>rodrigo bertram</motion.p>
            <motion.p initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:.5,delay:.7,ease:'circOut'}} viewport={{once:true}} className='text-uppercase textoCargo'>fundador / director innovacion</motion.p>
            <motion.a initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:.6,delay:.9,ease:'circOut'}} viewport={{once:true}} href='https://www.instagram.com/rodrigo.bertram.85/' target={'_blank'}><FontAwesomeIcon icon={faSquareInstagram} className='iconoInstagram p-3' /></motion.a>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Nosotros
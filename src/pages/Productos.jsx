import base1 from '../img/base1.webp';
import lemonchello from '../img/lemonchello.webp';
import base2 from '../img/cafeBase.webp';
import cafe from '../img/cafe.webp';
import base3 from '../img/mantecolBase.webp';
import mantecol from '../img/mantecol.webp';
import {motion} from 'framer-motion';
import { useState, useEffect} from 'react';






function Productos() { 
  const [bgColor, setBgColor] = useState('#f3f1e9');
  const colors = ['#f3f1e9','#eaf8c950','#a78f6b4b','#e9d99147'];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setBgColor(colors[0]);
      if (position > 450 && position <= 1600) {
        setBgColor(colors[1]);
      } 
      if (position > 1600 && position <= 2610) {
        setBgColor(colors[2]);
      } 
      if (position > 2610 && position <= 3435) {
        setBgColor(colors[3]);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
 

  return (
    <>
      <div style={{ backgroundColor: bgColor }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, type: 'tween', ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="container text-center mt-5 text-uppercase display-1 productos">nuestros licores</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: 3.2, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="container text-center mt-5 productos-licores display-6">Para crear nuestros productos, nos inspiramos en la naturaleza que nos rodea. El resultado: licores con sabores originales y auténticos.</motion.p>

        <div className='contenedorBotones container d-flex justify-content-center p-5'>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.3, ease: 'easeInOut' }}
            viewport={{ once: true }}
            href='#limoncello' className='btn btn-outline-secondary border border-dark-subtle text-uppercase'>limoncello</motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.4, ease: 'easeInOut' }}
            viewport={{ once: true }}
            href="#crema de cafe" className='btn btn-outline-secondary border border-dark-subtle text-uppercase'>cafe</motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            href="#crema de mani" className='btn btn-outline-secondary border border-dark-subtle text-uppercase'>mani</motion.a>
        </div>




        {/*LICOR 1*/}


        <div className='container-fluid mb-5' id="limoncello">
          <div className='row'>
            <div className='col-6 position-relative'>
              <div className='container position-absolute'>
                <img src={lemonchello} alt="" className='img-fluid licor1' />
              </div>
              <div>
                <img src={base1} alt="base del licor" className='img-fluid base1' />
              </div>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div className='mx-auto text-center'>
                <h2 className='display-3 text-uppercase limonchello'>limoncello</h2>
                <div className='text-center'>
                  <p className='descripcionTexto fs-4'>Un licor elaborado con limon y esencias bien definidas... Redescubre el Limoncello con nuestra versión de este clásico italiano.</p>
                </div>
                <div className='container row mt-5'>
                  <a className='enlaceDetalles text-uppercase' href='/limoncello'>detalles</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*LICOR 2*/}

        <div className='container-fluid mb-5' id="crema de cafe">
          <div className='row'>
            <div className='col-6 position-relative'>
              <div className='container position-absolute'>
                <img src={cafe} alt="" className='img-fluid licor1' />
              </div>
              <div>
                <img src={base2} alt="" className='img-fluid base1' />
              </div>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div className='mx-auto text-center'>
                <h2 className='display-3 text-uppercase cafe'>Crema de cafe</h2>
                <div className='text-center'>
                  <p className='descripcionTexto fs-4'>Un auténtico licor especiado con notas tanto exóticas como locales.</p>
                </div>
                <div className='container row mt-5'>
                  <a className='enlaceDetalles text-uppercase' href='/cafe'>detalles</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*LICOR 3*/}

        <div className='container-fluid' id="crema de mani">
          <div className='row'>
            <div className='col-6 position-relative'>
              <div className='container position-absolute'>
                <img src={mantecol} alt="" className='img-fluid licor1 mt-5' />
              </div>
              <div>
                <img src={base3} alt="" className='img-fluid base1' />
              </div>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div className='mx-auto text-center'>
                <h2 className='display-1 mantecol'>Postre de mani</h2>
                <div className='text-center'>
                  <p className='descripcionTexto fs-4'>Una versión con maní del clásico mantecol... Lo mejor de ambos mundos para los amantes del licor y el mantecol.</p>
                </div>
                <div className='container row mt-5'>
                  <a className='enlaceDetalles text-uppercase' href='/mantecol'>detalles</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productos
import base1 from '../img/base1.webp';
import lemonchello from '../img/lemonchello.webp';
import base2 from '../img/cafeBase.webp';
import cafe from '../img/cafe.webp';
import base3 from '../img/mantecolBase.webp';
import mantecol from '../img/mantecol.webp';
import {motion} from 'framer-motion';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';





function Productos() { 
  const [bgColor, setBgColor] = useState('#f3f1e9');
  const colors = ['#f3f1e9','#dfe7cce1','#a9cde270','#ad9d897a'];

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
          transition={{ duration: 1, delay: 1.8, type: 'tween', ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="container text-center mt-5 text-uppercase display-1 productos">nuestros licores</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: 1.9, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="container text-center mt-5 productos-licores display-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error illo quas iure, dolorum laudantium aspernatur, sint cum in libero fugiat laborum fuga vitae officiis doloremque tenetur cupiditate ducimus quae.</motion.p>

        <div className='contenedorBotones container d-flex justify-content-center p-5'>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
            href='#limoncello' className='btn btn-outline-secondary border border-dark-subtle text-uppercase'>limoncello</motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7, ease: 'easeInOut' }}
            viewport={{ once: true }}
            href="#crema de cafe" className='btn btn-outline-secondary border border-dark-subtle text-uppercase'>cafe</motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: 'easeInOut' }}
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
                  <p className='descripcionTexto fs-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste tempore labore suscipit quidem sed ducimus est! Sint id architecto voluptate eaque, nisi aut dicta, laudantium distinctio perferendis obcaecati mollitia consequuntur.</p>
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
                  <p className='descripcionTexto fs-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste tempore labore suscipit quidem sed ducimus est! Sint id architecto voluptate eaque, nisi aut dicta, laudantium distinctio perferendis obcaecati mollitia consequuntur.</p>
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
                  <p className='descripcionTexto fs-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste tempore labore suscipit quidem sed ducimus est! Sint id architecto voluptate eaque, nisi aut dicta, laudantium distinctio perferendis obcaecati mollitia consequuntur.</p>
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
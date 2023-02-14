import lemonchello from '../img/lemonchello.webp';
import {useNavigate,Link} from 'react-router-dom';
import { motion } from 'framer-motion';

function Limoncello() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.2}}>
        
        <div className='container contenedorLimoncello'>
          <p className='text-center tituloInfo text-uppercase'>limoncello</p>
        </div>
        <div className='container-fluid mb-5 card-info'>
          <div className='row'>
            <div className='col-6 position-relative'>
              <div className='container position-relative'>
                <img src={lemonchello} alt="imagen del limoncello" className='img-fluid licor1' />
              </div>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div className='mx-auto text-center'>
                <div className='text-center'>
                  <p className='fs-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste tempore labore suscipit quidem sed ducimus est! Sint id architecto voluptate eaque, nisi aut dicta, laudantium distinctio perferendis obcaecati mollitia consequuntur.</p>
                </div>
                <motion.table initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1, delay: .4, ease: 'easeInOut' }} className="table mt-5">
                  <thead>
                    <tr>
                      <td scope="col" className='text-uppercase d-flex tituloTabla'>tipo</td>
                      <td className='descripcionTabla '>Licor</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row" className='text-uppercase d-flex tituloTabla '>Formato</td>
                      <td className='descripcionTabla'>500ml</td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-uppercase d-flex tituloTabla '>% alcohol</td>
                      <td className='descripcionTabla'>22%</td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-uppercase d-flex tituloTabla '>color</td>
                      <td className='descripcionTabla' scope="row">Amarillo, con reflejos tirando a verde</td>
                    </tr>
                    <tr>
                      <td scope="row" className='text-uppercase d-flex tituloTabla '>composicion</td>
                      <td className='descripcionTabla' scope="row">Azucar,agua,cascara de limon</td>
                    </tr>
                  </tbody>
                </motion.table>
                <div className='container row mt-5'>
                  <Link className='enlaceDetalles text-uppercase' onClick={() => { navigate(-1) }}>volver</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
    </>
  )
}

export default Limoncello
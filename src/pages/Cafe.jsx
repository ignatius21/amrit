import {useNavigate,Link} from 'react-router-dom';
import cafe from '../img/cafe.webp'
import { motion } from 'framer-motion';

export default function Cafe() {
    const navigate = useNavigate();
  return (
      <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
              <div className='container contenedorLimoncello'>
                  <p className='text-center tituloInfo text-uppercase'>crema de cafe</p>
              </div>
              <div className='container-fluid mb-5 card-info'>
                  <div className='row'>
                      <div className='col-6 position-relative'>
                          <div className='container position-relative'>
                              <img src={cafe} alt="imagen del limoncello" className='img-fluid licorLimoncello' />
                          </div>
                      </div>
                      <div className='col-6 d-flex align-items-center'>
                          <div className='mx-auto text-center'>
                              <div className='text-center'>
                                  <p className='fs-4'>El licor de crema de café es un licor festivo con propiedades audaces. Gracias a su mezcla de ingredientes y su aroma distinguido, es el orgullo de Licores Amrit ya que su receta esconde preciados ingredientes autóctonos.</p>
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
                                          <td className='descripcionTabla'>20%</td>
                                      </tr>
                                      <tr>
                                          <td scope="row" className='text-uppercase d-flex tituloTabla '>color</td>
                                          <td className='descripcionTabla' scope="row">Ambar con leves tonos crema</td>
                                      </tr>
                                      <tr>
                                          <td scope="row" className='text-uppercase d-flex tituloTabla '>composicion</td>
                                          <td className='descripcionTabla' scope="row">Azucar,agua,cafe</td>
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

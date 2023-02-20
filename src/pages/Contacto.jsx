import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import imagenFormulario from '../img/11.webp';
import {useRef,useEffect} from 'react';
import emailjs from '@emailjs/browser';
import mapa from '../img/mapa.webp';
import {Form} from 'react-router-dom'




function Contacto() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v4rwjc5', 'template_it2tljd', form.current, 'nUDhMYULAhLjW-8MU')
      .then((result) => {
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  
  return (
    <>
    <div className="container text-center">
      <h1 className="text-uppercase img-fluid textoContacto">contactenos</h1>
    </div>
    <div className="container text-center">
      <p className="fw-bold parrafoContacto">Es importante para nosotros mantener una comunicación fluida con nuestros clientes,por eso lo invitamos a escribirnos y visitar nuestra redes para estar al tanto de las nuevas novedades.Siguenos!</p>
    </div>
    <div className="container text-center mt-5">
      <p className="locacion">Argentina,Santa Fe Capital</p>
    </div>
    <div className='container iconos position-relative'>
      <div className='container position-absolute top-50 start-50 translate-middle justify-content-center d-flex'>
        <a href='https://www.facebook.com/rodrigo.bertram.9' target='_blank'><FontAwesomeIcon icon={faFacebook}className='iconoFacebook p-3' /></a>
        <a href='https://www.instagram.com/amrit.licores/' target={'_blank'}><FontAwesomeIcon icon={faSquareInstagram}className='iconoInstagram p-3' /></a>
      </div>
    </div>
    <div className='container-fluid'>
      <p className='text-uppercase textoFormulario'>Escribanos</p>
    </div>
      <div className='container-fluid row'>
        <div className='col-6'>
          <Form onSubmit={sendEmail} ref={form} method='POST'>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"></label>
              <input type="text" className="form-control bg-formulario" id="exampleFormControlInput1" placeholder='Nombre y Apellido' required  name='from_name'/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"></label>
              <input type="email" className="form-control bg-formulario" id="exampleFormControlInput1" placeholder='Email' required name='from_email'/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
              <textarea className="form-control bg-formulario" id="exampleFormControlTextarea1" rows="3" placeholder='Mensaje' required name='message'></textarea>
            </div>
            <button type="submit" className="btn btn-licores2 border-0 text-uppercase d-flex justify-content-center align-items-center mt-5 mb-5 ">enviar</button>
          </Form>
        </div>
        <div className='col-6 mb-3'> 
          <img src={imagenFormulario} alt="imagen del formulario" className='formularioJpg rounded-4' />
        </div>
      </div>
      <div className='d-flex mt-5'>
        <div className='contenedorMapa'>
          <img src={mapa} alt="mapa de santa fe" className='imagenMapa' />
        </div>
      </div>
    </>
  )
}

export default Contacto
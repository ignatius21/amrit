import Navegacion2 from './Navegacion2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faSquareInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='footer border-top border-dark-subtle'>
            <Navegacion2 />
            <a href={'/'} className='container text-center amrit2 text-uppercase'>amrit</a>
            <div className='container iconos position-relative'>
                <div className='container position-absolute top-50 start-50 translate-middle justify-content-center d-flex'>
                    <a href='https://www.facebook.com/rodrigo.bertram.9' target='_blank'><FontAwesomeIcon icon={faFacebook} className='iconoFacebook p-3' /></a>
                    <a href='https://www.instagram.com/amrit.licores/' target={'_blank'}><FontAwesomeIcon icon={faSquareInstagram} className='iconoInstagram p-3' /></a>
                </div>
            </div>
            <div className='container text-center position-relative'>
                <p className='localidad fs-4'>Santa Fe, Argentina</p>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
  return (
    <>
      <div id='error-page' className='position-relative'>
        <div className=''>
          <h1 className='display-1 text-center text-danger fw-bold'>Oops !</h1>
          <p className='display-3 text-center'>Lo sentimos, estamos trabajando en ello!!!</p>
        </div>
      </div>
      <div className='container text-center mt-5'>
        <button type='button' onClick={()=>{navigate(-1)}} className='btn btn-licores2 border-0 text-uppercase justify-content-center align-items-center'>volver</button>
      </div>
        </>
  )
}

export default Error;
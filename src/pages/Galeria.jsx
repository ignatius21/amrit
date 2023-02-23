import {motion} from 'framer-motion';
import imagen1 from '../img/4.webp';
import imagen2 from '../img/9.webp';
import imagen3 from '../img/7.webp';
import imagen4 from '../img/8.webp';
import imagen5 from '../img/11.webp';
import imagen6 from '../img/15.webp';
import imagen7 from '../img/licorMani1.webp';
import imagen8 from '../img/licorMani7.webp';
import imagen9 from '../img/licorMani8.webp';
import imagen10 from '../img/licorMani9.webp';
import imagen11 from '../img/licorMani12.webp';
import imagen12 from '../img/licorMani14.webp';
import { useEffect } from 'react';




function Galeria() {

  const data=[
    {
      id:1,
      imgSrc: imagen1,
    },
    {
      id:2,
      imgSrc: imagen2,
    },
    {
      id:3,
      imgSrc: imagen3,
    },
    {
      id:4,
      imgSrc: imagen4,
    },
    {
      id:5,
      imgSrc: imagen5,
    },
    {
      id:6,
      imgSrc: imagen6,
    },
    {
      id:7,
      imgSrc: imagen7,
    },
    {
      id:8,
      imgSrc: imagen8,
    },
    {
      id:9,
      imgSrc: imagen9,
    },
    {
      id:10,
      imgSrc: imagen10,
    },
    {
      id:11,
      imgSrc: imagen11,
    },
    {
      id:12,
      imgSrc: imagen12,
    }
  ];
  

  return (
    <>
    <div className='container'>
      <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:3}} className='text-uppercase text-center textoGaleria'>galeria</motion.h1>
    </div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:3.5}} className='galeria'>
      {data.map((item,index)=>{
        return(
          <div className='imagenes' key={index}>
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.5,delay:.5,ease:'easeInOut'}} src={item.imgSrc} alt="" style={{width:'100%'}} className='rounded-5'/>
          </div>
        )
      })}
    </motion.div>
    
    
      
    </>
  )
}

export default Galeria
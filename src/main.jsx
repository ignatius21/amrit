import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout';
import Productos from './pages/Productos';
import Galeria from './pages/Galeria';
import Nosotros from './pages/Nosotros';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Error from './components/Error';
import Limoncello from './pages/Limoncello';
import {ParallaxProvider} from 'react-scroll-parallax';












const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Inicio/>
      },
      {
        path: '/productos',
        element: <Productos/>
      },
      {
        path: '/nosotros',
        element: <Nosotros/>
      },
      {
        path:'/galeria',
        element: <Galeria/>
      },
      {
        path:'/contacto',
        element: <Contacto/>
      },
      {
        path: '/limoncello',
        element: <Limoncello/>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ParallaxProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ParallaxProvider>
  
  
  
  

)

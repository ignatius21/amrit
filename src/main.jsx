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
import Cafe from './pages/Cafe';
import Mani from './pages/Mani';
import {ParallaxProvider} from 'react-scroll-parallax';












const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Inicio/>,
        exact: true
      },
      {
        path: '/productos',
        element: <Productos/>,
        exact: true
      },
      {
        path: '/nosotros',
        element: <Nosotros/>,
        exact: true
      },
      {
        path:'/galeria',
        element: <Galeria/>,
        exact: true
      },
      {
        path:'/contacto',
        element: <Contacto/>,
        exact: true
      },
      {
        path: '/limoncello',
        element: <Limoncello/>,
        exact: true
      },
      {
        path: '/cafe',
        element: <Cafe/>,
        exact: true
      },
      {
        path: '/mantecol',
        element: <Mani/>,
        exact: true
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

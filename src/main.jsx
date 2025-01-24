import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './Router/Route.jsx';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <RouterProvider router={router} />
      </div>
      <ToastContainer />
 

  </StrictMode>

)








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

    <div >
      <RouterProvider router={router} />
    </div>
    <ToastContainer />


  </StrictMode>

)








import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import myRoutes from './routes/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRoutes}/>
  </StrictMode>
)

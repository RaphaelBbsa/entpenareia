import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Links } from './Links.tsx';
import { UpdatePhone } from './PhoneUpdate.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Links/>,
  },
  {
    path: "/reserva",
    element: <App/>,
  },
  {
    path: "/phoneUpdate",
    element: <UpdatePhone/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

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
import { ListCheckins } from './listAll.tsx';
import { NewBookings } from './NewBookings.tsx';
import { AddBooking } from './addBooking.tsx';
import { WrongPhones } from './wrongPhones.tsx';
import { CheckBooking } from './checkBooking.tsx';
import { ListConciergePhones } from './listConciergePhones.tsx';
import { AddConcierge } from './addConciergePhone.tsx';
import { UpdateConcierge } from './updateConciergePhone.tsx';

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
  },
  {
    path: "/checkins",
    element: <ListCheckins/>
  },
  {
    path: "/newbookings",
    element: <NewBookings/>
  },
  {
    path: "/addbooking",
    element: <AddBooking/>
  },
  {
    path: "/wrongphones",
    element: <WrongPhones/>
  },
  {
    path: "/checkbooking",
    element: <CheckBooking/>
  },
  {
    path: "/concierges",
    element: <ListConciergePhones/>
  },
  {
    path: "/concierge/new",
    element: <AddConcierge/>
  },
  {
    path: "/concierge/update",
    element: <UpdateConcierge/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

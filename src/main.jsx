import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TimeLine from './Pages/TimeLine/TimeLine.jsx';
import Stats from './Pages/Stats/Stats.jsx';
import Home from './Pages/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<div className='my-auto mx-auto w-full h-16'>Error Page </div>,
    children:[
      {
        path:"/",

        element: <Home></Home>, 
        loader: () =>  fetch('friends.json')
      },
      {
        path: "/timeline",
        element:<TimeLine/>
      },
      {
        path: "/stats",
        element:<Stats/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

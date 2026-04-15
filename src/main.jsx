import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TimeLine from './component/Timeline/TimeLine.jsx';
import Stats from './component/Stats/Stats.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<div className='my-auto mx-auto w-full h-16'>Error Page </div>,
    children:[
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

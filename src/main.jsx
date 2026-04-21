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
import { FriendProvider } from './FriendContext/FriendContext.jsx';
import FriendDetails from './Pages/Friends/FriendsDetails/FriendDetails.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",

        element: <Home></Home>, 
        loader: () =>  fetch('friends.json'),
        
      },
      {
        path: "/timeline",
        element:<TimeLine/>
      },
      {
        path: "/stats",
        element:<Stats/>
      },
      {
    path: "/details/:id",
    element: <FriendDetails />
}
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FriendProvider>
  <RouterProvider router={router} />
   </FriendProvider>
     
   
  </StrictMode>,
)

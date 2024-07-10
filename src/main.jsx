import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import AuthContext from './firebase/AuthContext';
import PrivateRoute from './firebase/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element:    <PrivateRoute><Home></Home></PrivateRoute>  ,
      },
      {
        path: "/login",
        element:  <Login></Login>  ,
      },
      {
        path: "/up",
        element:  <SignUp></SignUp> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
     <AuthContext>
      
     <RouterProvider router={router} />

     </AuthContext>

    
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReadDetails from '../pages/components/ReadDetails';
import "../scss/index.scss";

// Routes
import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/read-details/:skill",
    element: <ReadDetails/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

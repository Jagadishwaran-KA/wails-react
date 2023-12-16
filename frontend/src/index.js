import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload'
import Services from './components/services/services'
import Receiver from './components/Receive/Receiver';
import Files from './components/Receive/Files/Files';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='upload' element={<Upload />} />
      <Route path='services' element={<Services />} />
      <Route path='server' element={<Receiver />}>
      </Route>
      <Route path='server/fly' element={<Files />} />

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

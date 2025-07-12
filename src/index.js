import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import App from './App';
import './index.css';

import Register from './Register/Register';
import Login from './Register/Login';
import Home from './components/Home';
import Products from './components/Products';
import Promotion from './components/Promotion';
import Mine from './components/Mine';
import Checkin from './Home/Checkin';
import Information from './Home/Information';
import Recharge from './Home/Recharge';
import Withdrawal from './Home/Withdrawal';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'home', element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'promotion', element: <Promotion /> },
        { path: 'mine', element: <Mine /> },
        { path: 'checkin', element: <Checkin /> },
        { path: 'information', element: <Information /> },
        { path: 'recharge', element: <Recharge /> },
        { path: 'withdrawal', element: <Withdrawal /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

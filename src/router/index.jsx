import { createBrowserRouter } from 'react-router-dom'

import LayoutPublic from '../layouts/LayoutPublic'
import PrivateLayout from '../layouts/PrivateLayout'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Login />
          },
          {
            path: '/register',
            element: <Register />
          },
          {
            path: 'dashboard',
            element: <PrivateLayout />,
            children: [
              {
                index: true,
                element: <Dashboard />
              }
            ]
          }
        ]
      }
    ]
  }
])

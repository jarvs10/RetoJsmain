import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouts from './components/Layouts'
import Index, {loader as movieLoader} from './pages/Index'
import InfoId, {loader as movieDescription} from './pages/InfoId'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts/>,
    children: [
      {
        index: true,
        element: <Index />,
        loader: movieLoader
      },
      {
        path: '/movies/:movieId/editar',
        element: <InfoId />,
        loader: movieDescription
      },
    ]
  },
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

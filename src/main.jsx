import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouts from './components/Layouts'
import Index, {loader as movieLoader} from './pages/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts/>,
    children: [
      {
        index: true,
        element: <Index />,
        loader: movieLoader
      }
    ]
  },
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

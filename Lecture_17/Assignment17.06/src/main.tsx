import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Link, Outlet } from 'react-router-dom'
import Contacts, { loader as pageLoader } from './contacts'
import ErrorPage from './ErrorPage'

const Root = () => {
  return (
    <div>
      this is root
      <nav>
        <Link to={'/buuteBotti'}>BuuteBotti</Link>
        <Link to={'/buuttiBotti'}>BuuttiBotti</Link>
      </nav>
      <Outlet />
    </div>
  )
}

//komponentteja käytetään routterin kautta, ei default appia
//komponentit voivat tietysti olla eri tiedostoissa
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/:name',
        element: <Contacts />,
        loader: pageLoader,
        errorElement: <ErrorPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contacts, { loader as pageLoader } from './contacts'
const Root = () => {
  return <div>this is root</div>
}

// const Contacts = ({ contact }: Props) => {
//   return (
//     <div className="contact">
//       <h1>Contact</h1>
//     </div>
//   )
// }

//komponentteja käytetään routterin kautta, ei default appia
//komponentit voivat tietysti olla eri tiedostoissa
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/:name',
    element: <Contacts />,
    loader: pageLoader
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

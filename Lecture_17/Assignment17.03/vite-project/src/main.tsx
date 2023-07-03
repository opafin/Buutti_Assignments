import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import iamroot from './iamroot.png'

const Root = () => {
  return <img src={iamroot} />
}

interface Props {
  v: string
}

const Contacts = (props: Props) => {
  return (
    <div className="Version">
      <h1>{props.v}</h1>
    </div>
  )
}

//komponentteja käytetään routterin kautta, ei default appia
//komponentit voivat tietysti olla eri tiedostoissa
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/version',
    element: <Contacts v="Contacts v1.0" />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

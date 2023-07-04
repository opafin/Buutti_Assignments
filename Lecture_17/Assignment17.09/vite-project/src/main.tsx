import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Link, Outlet } from 'react-router-dom'
import { loader as pageLoader, SongPage } from './songsPage'
import songs from './songs'
import ErrorPage from './ErrorPage'
import './main.css'
import './button.css'

const Root = () => {
  const [HighlightedButtonID, setHighlightedButtonID] = useState<number>(0)

  return (
    <div className="root">
      <h1></h1>
      <nav>
        {songs.map((song) => (
          <li className="songListItem" key={song.id}>
            <button
              className={`songBtn${HighlightedButtonID === song.id ? '-selected' : ''}`}
              onClick={() => setHighlightedButtonID(song.id)}
            >
              <Link className="songLinks" to={`/${song.id}`}>
                {song.title}
              </Link>
            </button>
          </li>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/:id',
        element: <SongPage />,
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

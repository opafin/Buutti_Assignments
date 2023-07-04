import { useLoaderData } from 'react-router-dom'
import verseParser from './verseParser'
import songs, { Song } from './songs'
import './main.css'

export function loader({ params }: any) {
  const id = params.id
  const validIDs = songs.map((song) => song.id)
  if (validIDs.includes(Number(id))) return params.id
  throw new Response('Invalid ID', { status: 404 })
}

export function SongPage() {
  const id = useLoaderData()
  const song = songs.find((song) => song.id === Number(id))
  const versedSong = verseParser(song as Song)
  return (
    <div className="songDetails">
      <h1>{song?.title}</h1>
      <div className="lyrics">
        {versedSong.verses.map((verse, index) => {
          return (
            <pre className="verse" key={index}>
              {verse}
            </pre>
          )
        })}
      </div>
    </div>
  )
}

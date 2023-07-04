import { Song } from './songs'

interface versedSong {
  id: number
  title: string
  verses: string[]
}

function verseParser(song: Song) {
  song.lyrics = '  ' + song.lyrics.trim()
  const wrappableSong: versedSong = {
    id: song.id,
    title: song.title,
    verses: song.lyrics.split(' \n')
  }
  return wrappableSong
}

export default verseParser

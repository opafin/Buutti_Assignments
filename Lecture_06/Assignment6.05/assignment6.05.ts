import axios from 'axios'

interface Response {
  Title: string
  Year: string
}

async function getMovie(title: string, year: number) {
  const apicall = `http://www.omdbapi.com/?apikey=c3a0092f&type=movie&t=${title}&y=${year}`
  const response = await axios.get(apicall)
  const typedResult: Response = response.data
  console.log(typedResult.Title)
  console.log(typedResult.Year)
}
getMovie('Avengers: Endgame', 2019)

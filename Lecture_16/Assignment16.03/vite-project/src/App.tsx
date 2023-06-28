import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [joke, setJoke] = useState(0)

  useEffect(() => {
    async function fetchDadJokes() {
      const response = await axios.get('https://api.api-ninjas.com/v1/dadjokes', {
        headers: { 'X-Api-Key': 'qFRwfcoEjiLRvRYhJirWtQ==1JTjQy3ah2MoAPgM' }
      })
      setJoke(response.data[0].joke)
    }
    fetchDadJokes()
  }, [])
  return <div>{joke ? joke : 'Loading joke...'}</div>
}

export default App

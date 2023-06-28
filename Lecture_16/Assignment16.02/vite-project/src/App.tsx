import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setTimer] = useState(0)

  useEffect(() => {
    const date = new Date().getSeconds()
    const seconds = setTimeout(() => setTimer(date), 1000)
    return () => clearTimeout(seconds)
  }, [seconds])
  //  [] ajetaan vain yhden kerran
  //  jos määrität dependencyn, niin sen funktioita, stateja
  return <div>{seconds}</div>
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [randInt, randomInt] = useState(0)

  return (
    <>
      <div>
        <h1>Vite + React, a Random Number from 1 to 100</h1>
        <div className="card">
          <button onClick={() => randomInt(() => Math.ceil(Math.random() * 100))}>{randInt}</button>
        </div>
      </div>
    </>
  )
}

export default App

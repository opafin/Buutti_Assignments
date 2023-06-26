import { useState } from 'react'
import './App.css'

function App() {
  const [randInt, setRandomInt] = useState(0)
  const [randInt2, setRandomInt2] = useState(0)
  const [randInt3, setRandomInt3] = useState(0)
  return (
    <>
      <div className="card">
        <button onClick={() => setRandomInt(() => Math.ceil(Math.random() * 100))}>{randInt}</button>
        <div className="card">
          <button onClick={() => setRandomInt2(() => Math.ceil(Math.random() * 100))}>{randInt2}</button>
          <div className="card">
            <button onClick={() => setRandomInt3(() => Math.ceil(Math.random() * 100))}>{randInt3}</button>
          </div>
          {randInt + randInt2 + randInt3}
        </div>
      </div>
    </>
  )
}

export default App

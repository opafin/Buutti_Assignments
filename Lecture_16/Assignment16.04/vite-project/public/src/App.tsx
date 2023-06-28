import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [numberArray, setNumberArray] = useState<number[]>([])
  function handleOnClick() {
    let rndNumber: number = Math.random() * 100
    while (numberArray.includes(rndNumber)) {
      rndNumber = Math.random() * 100
    }
    setNumberArray((currentArray) => {
      const newArray = [...currentArray, rndNumber]
      return newArray
    })
  }

  return (
    <>
      <div>
        <h1>Bingo</h1>
        <div>
          <button
            className="Button"
            onClick={() => {
              handleOnClick()
            }}
          >
            +
          </button>
        </div>
        <div className="card">
          {numberArray.map((number) => (
            <div className="bingoStyle">{Math.floor(number)}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

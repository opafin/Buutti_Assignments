import React, { useState } from 'react'
import NumberInput from './phonenumbas'

const App = () => {
  const [numbers, setNumbers] = useState<String[]>([])

  const addNumber = (n: string) => {
    const newNumbers = [...numbers, n]
    setNumbers(newNumbers)
  }

  return (
    <div className="App">
      <h1>Phone Number List</h1>
      <NumberInput addNumber={addNumber} />
      <div>
        {numbers.map((num, index) => (
          <div key={index}>{num}</div>
        ))}
      </div>
    </div>
  )
}

export default App

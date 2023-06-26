import { useState, ChangeEvent } from 'react'

function App() {
  const [myText, setMyText] = useState('')
  const [displayText, setDisplayText] = useState('')

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMyText(event.target.value)
  }

  return (
    <div>
      <div className="App">
        <input type="text" value={myText} onChange={onInputChange} />
        <button onClick={() => setDisplayText(myText)}>{displayText}</button>
      </div>
    </div>
  )
}

export default App

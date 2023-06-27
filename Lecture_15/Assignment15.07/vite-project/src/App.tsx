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
        <input className="inputBox" type="text" value={myText} onChange={onInputChange} />
        <button onClick={() => setDisplayText(myText)}>Send Txt</button>
        <div className="displayText">{displayText}</div>
      </div>
    </div>
  )
}

export default App

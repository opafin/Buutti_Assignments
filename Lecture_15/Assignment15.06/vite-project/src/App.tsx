import './App.css'
import './names'
import NameListRenderer from './nameslistRenderer'
import { namelist } from './names'

function App() {
  return (
    <div className="App">
      <NameListRenderer names={namelist} />
    </div>
  )
}

export default App

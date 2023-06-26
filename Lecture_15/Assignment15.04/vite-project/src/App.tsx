import './App.css'
import Instrument from './Instrument'
import serpenttiImage from './375px-Serpent_(musical_instrument).jpg'
import kornetti from './Bb-Kornett.jpg'
import käyrätorvi from './French_horn_front.png'

function App() {
  return (
    <>
      <div>
        <h1>Instrument Selection</h1>
        <div className="card">
          <Instrument name="Käyrätorvi" image={käyrätorvi} price={Number(5)} />
          <Instrument name="kornetti" image={kornetti} price={Number(5)} />
          <Instrument name="Serpentti" image={serpenttiImage} price={Number(5)} />
        </div>
      </div>
    </>
  )
}

export default App

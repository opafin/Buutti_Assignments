import { useState, useEffect, ChangeEvent } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './App.css'

function App() {
  const [catPic, setCatPic] = useState('')
  const [catSays, setCatSays] = useState('')

  useEffect(() => {
    getCat(catSays)
  }, [])

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCatSays(event.target.value)
  }

  async function getCat(catSays: string) {
    let catLink = ''
    if (catSays) catLink = `https://cataas.com/cat/says/${catSays}?time=${Date.now()}`
    else {
      catLink = `https://cataas.com/cat?time=${Date.now()}`
    }
    setCatPic(catLink)
  }

  return (
    <div>
      <LazyLoadImage alt="Catpic" effect="blur" src={catPic} placeholderSrc={'/placeHolderCat.jpg'} />
      <input className="inputBox" type="text" value={catSays} onChange={onInputChange} />
      <button
        onClick={() => {
          getCat(catSays)
        }}
      >
        Reload Cat
      </button>
    </div>
  )
}

export default App

import { useState } from 'react'

import './App.css'

function App() {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const dataFields = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      type: data.get('type') as string,
      content: data.get('content') as string
    }

    console.log(dataFields)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget)

    const requiredFields = [data.get('type') as string, data.get('content') as string]

    const enableSubmit = requiredFields.every((value) => value && value.length > 0)
    setIsSubmitEnabled(enableSubmit)
  }

  return (
    <>
      <div className="theForm">
        <h1>Feedback form</h1>
        <div className="card">
          <form onSubmit={handleSubmit} onChange={handleOnChange}>
            <label>Feedback</label>
            <br />
            <input type="radio" value="feedback" name="type" id="feedback" />
            <label>Suggestion</label>
            <br />
            <input type="radio" value="suggestion" name="type" id="suggestion" />
            <label>Question</label>
            <br />
            <input type="radio" value="question" name="type" id="question" />

            <label>Content</label>
            <textarea name="content"></textarea>

            <label>Name</label>
            <input type="text" name="name" />

            <label>Email</label>
            <input type="text" name="email" />

            <button disabled={!isSubmitEnabled}>Send</button>
            <input type="reset" value="Reset"></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default App

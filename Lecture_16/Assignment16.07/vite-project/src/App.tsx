import { useState, useEffect, ChangeEvent } from 'react'
import ContactList from './contactList'
import './App.css'

function App() {
  const [contacts, setContacts] = useState<string[]>([])
  const [contactInput, setContactInput] = useState('')

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContactInput(event.target.value)
  }

  function addContact(contact: string) {
    const newContacts = [...contacts, contact]
    setContacts(newContacts)
    setContactInput('')
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className="contactList">
        <ContactList contacts={contacts} />
        <input type="text" value={contactInput} onChange={onInputChange}></input>
        <button onClick={() => addContact(contactInput)}>add Contact</button>
      </div>
    </>
  )
}

export default App

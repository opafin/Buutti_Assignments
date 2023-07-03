import { useState } from 'react'
import { Contact } from './types'
import ContactList from './contactList'
import SubmitContactform from './submitContactForm'
import DisplayContact from './displayContact'
import SearchBar from './searchBar'
import './App.css'

function App() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContact, setSelectedContact] = useState<Contact>({ name: '', email: '', id: 0 })
  const [DisplayContactView, setDisplayContactView] = useState(false)
  const [DisplayContactForm, setDisplayContactForm] = useState(false)
  const [filter, setFilter] = useState('')

  function addContact() {
    setDisplayContactView(false)
    setSelectedContact({ name: '', email: '', id: 0 })
    setDisplayContactForm(true)
  }

  function removeContact(contactObj: Contact) {
    setContacts(contacts.filter((existingContact) => existingContact.id !== contactObj.id))
    setDisplayContactView(false)
  }

  function editContact() {
    setDisplayContactView(false)
    setDisplayContactForm(true)
  }

  function displayContactDetails(contactId: number) {
    const savedContact: Contact = contacts.find((savedContact) => savedContact.id === contactId) || {
      name: 'no existingContact with this name',
      email: '-',
      id: 0
    }
    setDisplayContactForm(false)
    setSelectedContact(savedContact)
    setDisplayContactView(true)
  }

  function putContact(contact: Contact) {
    const updatedContacts = contacts.filter((previousContact) => previousContact.id !== contact.id)
    updatedContacts.push(contact)
    setContacts(updatedContacts)
    setDisplayContactForm(false)
    setDisplayContactView(true)
  }

  function postContact(contact: Contact) {
    const newContacts = [...contacts, contact]
    setContacts(newContacts)
    setDisplayContactForm(false)
  }

  return (
    <div className="contactsApp">
      <div className="contactListContainer">
        <SearchBar filter={filter} setFilter={setFilter} />
        <ContactList contacts={contacts} displayContact={displayContactDetails} filter={filter} />
        <div className="addContact">{<button onClick={addContact}>Add Contact</button>}</div>
      </div>
      <div className="formPanel">
        {!DisplayContactView && !DisplayContactForm && <h1>Contact Manager</h1>}
        {DisplayContactView && (
          <DisplayContact contact={selectedContact} removeContact={removeContact} editContact={editContact} />
        )}
        {DisplayContactForm && (
          <SubmitContactform
            onCancel={() => setDisplayContactForm(false)}
            postContact={postContact}
            putContact={putContact}
            selectedContact={selectedContact}
          />
        )}
      </div>
    </div>
  )
}

export default App

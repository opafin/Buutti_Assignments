import { useState } from 'react'
import { Contact } from './types'
import ContactList from './contactList'
import SubmitContactform from './submitContactForm'
import DisplayContact from './displayContact'
import SearchBar from './searchBar'
import './App.css'

function App() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContact, setSelectedContact] = useState<Contact>({ name: '', email: '', created: new Date() })
  const [showContactView, setShowContactView] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [filter, setFilter] = useState('')

  function addContact() {
    setShowContactView(false)
    setSelectedContact({ name: '', email: '', created: new Date() })
    setShowContactForm(true)
  }

  function removeContact(contactObj: Contact) {
    setContacts(contacts.filter((existingContact) => existingContact.created !== contactObj.created))
    setShowContactView(false)
  }

  function editContact() {
    setShowContactView(false)
    setShowContactForm(true)
  }

  function showContactDetails(contactName: string) {
    const existingContact: Contact = contacts.find((existingContact) => existingContact.name === contactName) || {
      name: 'no existingContact with this name',
      email: '-',
      created: new Date()
    }
    setShowContactForm(false)
    setSelectedContact(existingContact)
    setShowContactView(true)
  }

  function putContact(contact: Contact) {
    const updatedContacts = contacts.filter((previousContact) => previousContact.created !== contact.created)
    updatedContacts.push(contact)
    setContacts(updatedContacts)
    setShowContactForm(false)
  }

  function postContact(contact: Contact) {
    const newContacts = [...contacts, contact]
    setContacts(newContacts)
    setShowContactForm(false)
  }

  return (
    <div className="contactsApp">
      <div className="contactListContainer">
        <SearchBar filter={filter} setFilter={setFilter} />
        <ContactList contacts={contacts} showContact={showContactDetails} filter={filter} />
        <div className="addContact">{<button onClick={addContact}>Add Contact</button>}</div>
      </div>
      <div className="formPanel">
        {!showContactView && !showContactForm && <h1>Contact Manager</h1>}
        {showContactView && (
          <DisplayContact contact={selectedContact} removeContact={removeContact} editContact={editContact} />
        )}
        {showContactForm && (
          <SubmitContactform
            onCancel={() => setShowContactForm(false)}
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

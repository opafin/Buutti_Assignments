import { useState } from 'react'
import ContactList from './contactList'
import SubmitContactform from './submitContactForm'
import DisplayContact from './displayContact'
import './App.css'
import { Contact } from './types'
import SearchBar from './searchBar'

function App() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [contactToShow, setContactToShow] = useState<Contact>({ name: '', email: '', created: new Date() })
  const [showContactView, setShowContactView] = useState(false)
  const [showInputForm, setShowContactForm] = useState(false)
  const [filter, setFilter] = useState('')

  function showContactDetails(contactName: string) {
    const existingContact: Contact = contacts.find((existingContact) => existingContact.name === contactName) || {
      name: 'no existingContact with this name',
      email: '-',
      created: new Date()
    }
    hideViews()
    setContactToShow(existingContact)
    setShowContactView(true)
  }

  function addContact() {
    hideViews()
    setContactToShow({ name: '', email: '', created: new Date() })
    setShowContactForm(true)
  }

  function editContact() {
    hideViews()
    setShowContactForm(true)
  }

  function removeContact(contactObj: Contact) {
    setContacts(contacts.filter((existingContact) => existingContact.created !== contactObj.created))
    setShowContactView(false)
  }

  function handleContactForm(contact: Contact) {
    const updatedContacts = contacts.filter((previousContact) => previousContact.created !== contact.created)
    updatedContacts.push(contact)
    setContacts(updatedContacts)
    hideViews()
  }

  function hideViews() {
    setShowContactView(false)
    setShowContactForm(false)
    setShowContactForm(false)
    setShowContactView(false)
  }

  return (
    <div className="contactsApp">
      <div className="contactListContainer">
        <SearchBar filter={filter} setFilter={setFilter} />
        <ContactList contacts={contacts} showContact={showContactDetails} filter={filter} />
        <div className="addContact">{<button onClick={() => addContact()}>Add Contact</button>}</div>
      </div>
      <div className="formPanel">
        {!showContactView && !showInputForm && <h1>Contact Manager</h1>}
        {showContactView && (
          <DisplayContact contact={contactToShow} removeContact={removeContact} editContact={editContact} />
        )}
        {showInputForm && (
          <SubmitContactform onCancel={hideViews} submitData={handleContactForm} existingContact={contactToShow} />
        )}
      </div>
    </div>
  )
}

export default App

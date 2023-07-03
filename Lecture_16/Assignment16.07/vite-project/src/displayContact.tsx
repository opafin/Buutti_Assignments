import { Contact } from './types'

interface DisplayContactProps {
  contact: Contact
  editContact: (contact: Contact) => void
  removeContact: (contact: Contact) => void
}

function DisplayContact({ contact, removeContact, editContact }: DisplayContactProps) {
  return (
    <>
      <h1>name: {contact.name}</h1>
      <p>email: {contact.email}</p>
      <p>id: {contact.id}</p>
      {contact.phone && <p>phone: {contact.phone}</p>}
      {contact.address && <p>address: {contact.address}</p>}
      {contact.website && <p>website: {contact.website}</p>}
      {contact.notes && <p>notes: {contact.notes}</p>}
      <button onClick={() => editContact(contact)}>Edit</button>
      <button onClick={() => removeContact(contact)}>Remove</button>
    </>
  )
}

export default DisplayContact

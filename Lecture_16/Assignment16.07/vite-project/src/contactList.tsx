import { Contact } from './types'
export interface ContactListProps {
  contacts: Contact[]
  showContact: (contactName: string) => void
  filter?: string
}

function ContactList({ contacts, showContact, filter }: ContactListProps) {
  if (filter) contacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  //localeCompare can apparently handle international characters too, not just lower and upper case
  const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <ul className="contactList">
      {sortedContacts.map((contacts, index) => {
        return (
          <li key={index}>
            <button onClick={() => showContact(contacts.name)}>{contacts.name}</button>
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList

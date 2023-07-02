import { useState, useEffect } from 'react'
import { Contact } from './types'

interface Props {
  onCancel: () => void
  submitData: (contact: Contact) => void
  existingContact?: Contact
}

function ContactForm({ onCancel, submitData, existingContact }: Props) {
  const [currentContact, setCurrentContact] = useState<Contact>({ name: '', email: '', created: new Date() })
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false)

  useEffect(() => {
    if (existingContact) setCurrentContact(existingContact)
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const contact: Contact = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      address: data.get('address') as string,
      website: data.get('website') as string,
      notes: data.get('notes') as string,
      created: existingContact?.created || new Date()
    }
    submitData(contact)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget)
    if (!existingContact) {
      const requiredFields = [data.get('name') as string, data.get('email') as string]
      const enableSubmit = requiredFields.every((value) => value && value.length > 0)
      setIsSubmitEnabled(enableSubmit)
    } else setIsSubmitEnabled(true)
  }

  return (
    <>
      <div>
        <h1>Add Contact</h1>
        <form className="theForm" onSubmit={handleSubmit} onChange={handleOnChange}>
          <label>Name</label> <br />
          <input type="text" defaultValue={currentContact?.name} name="name" id="name" />
          <br />
          <label>Email</label> <br />
          <input type="text" defaultValue={currentContact?.email} name="email" id="email" />
          <br />
          <label>Phone</label> <br />
          <input type="text" defaultValue={currentContact?.phone} name="phone" id="phone" />
          <br />
          <label>Address</label> <br />
          <input type="text" defaultValue={currentContact?.address} name="address" id="address" />
          <br />
          <label>Website</label> <br />
          <input type="text" defaultValue={currentContact?.website} name="website" id="website" />
          <br />
          <label>Notes</label> <br />
          <input type="text" defaultValue={currentContact?.notes} name="notes" id="notes" />
          <br />
          <button type="submit" disabled={!isSubmitEnabled}>
            Send
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="reset" value="Reset">
            Reset
          </button>
        </form>
      </div>
    </>
  )
}
export default ContactForm

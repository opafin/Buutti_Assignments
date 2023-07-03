import { useLoaderData } from 'react-router-dom'

export function loader({ params }: any) {
  return params.name
}

export default function ContactInformation() {
  const name = useLoaderData() as string
  console.log(name)
  const contactToShow = contacts.filter((contact) => contact.name === name)[0]
  console.log(contactToShow)
  return <div className="Page">Contact to Show{contactToShow.name}!</div>
}

const contacts = [{ name: 'buuteBotti', email: '', created: new Date() }]

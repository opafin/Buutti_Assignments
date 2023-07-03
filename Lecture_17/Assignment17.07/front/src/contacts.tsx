import { useLoaderData } from 'react-router-dom'

export function loader({ params }: any) {
  const name = params.name
  if (name === 'buuteBotti' || name === 'buuttiBotti') return params.name

  throw new Response('Wrong name', { status: 404 })
}

export default function ContactInformation() {
  const name = useLoaderData() as string
  console.log(name)
  const contactToShow = contacts.filter((contact) => contact.name === name)[0]
  console.log(contactToShow)
  return <div className="Page">{contactToShow.name}!</div>
}

const contacts = [
  { name: 'buuteBotti', email: '', created: new Date() },
  { name: 'buuttiBotti', email: '', created: new Date() }
]

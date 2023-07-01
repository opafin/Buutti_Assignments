export interface Props {
  contacts: Array<string>
}

function contactList(props: contactProps) {
  return (
    <ul>
      {props.contacts.map((name, index) => {
        return <li key={index}>{name}</li>
      })}
    </ul>
  )
}

export default contactList

interface Props {
  names: Array<string>
}
//prettier-ignore
function NamelistRenderer(props: Props) {
  return <ul> {props.names.map((name, index) => {
    const content = index % 2 === 0 ? 
    <b>{name}</b> : 
    <i>{name}</i>
    return <li key={index}>{content}</li>
  })} </ul>
}

export default NamelistRenderer

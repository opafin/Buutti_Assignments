function Instrument(props: any) {
  return (
    <>
      <div>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.image} />
        <h2>Price: {props.price}</h2>
      </div>
    </>
  )
}

export default Instrument

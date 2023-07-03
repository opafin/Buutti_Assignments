import { CSSProperties } from 'react'

const container: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'normal',
  height: '100vh'
}

const item: CSSProperties = {
  display: 'block',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
  alignSelf: 'auto',
  order: 0,
  padding: '24px'
}

function App() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)

  return (
    <>
      <div style={container}>
        <div style={{ ...item, backgroundColor: `#${randomColor}` }}>#{randomColor}</div>
      </div>
    </>
  )
}
export default App

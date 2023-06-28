import { ChangeEvent, useState } from 'react'

interface NumberInputProps {
  addNumber: (n: string) => void
}

const NumberInput: React.FC<NumberInputProps> = ({ addNumber }) => {
  const [inputNumber, setInputNumber] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(Number(event.target.value))) {
      setInputNumber(event.target.value)
      if (inputNumber.length === 10) {
        addNumber(inputNumber)
        setInputNumber('')
      }
    }
  }
  return (
    <div className="NumberInput">
      <input type="text" value={inputNumber} placeholder="Enter 10 digit number" onChange={(e) => onChange(e)} />
    </div>
  )
}

export default NumberInput

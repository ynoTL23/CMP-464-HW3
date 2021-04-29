import React from 'react'
import PadButton from './PadButton'
import '../styles/PadInput.css'

const colors = ['red', 'green', 'grey', 'purple', 'pink', 'lime']

const PadInput = () => {
  return (
    <div className='PadInput'>
      {colors.map((color, idx) => (
        <PadButton text={idx + 1} bgColor={color} />
      ))}
    </div>
  )
}
export default PadInput

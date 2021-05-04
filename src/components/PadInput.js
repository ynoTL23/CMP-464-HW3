import React from 'react'
import PadButton from './PadButton'
import '../styles/PadInput.css'

// list of colors for rendering
const colors = ['red', 'green', 'grey', 'purple', 'pink', 'lime']

const PadInput = () => {
  return (
    <div className='PadInput'>
      {/* map over the list of colors and render them */}
      {colors.map((color, idx) => (
        <PadButton text={idx + 1} bgColor={color} />
      ))}
    </div>
  )
}
export default PadInput

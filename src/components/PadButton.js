import React from 'react'
import '../styles/PadButton.css'

const PadButton = props => {
  return (
    <div className='PadButton'>
      <div className='PadButton-text'>{props.text}</div>
    </div>
  )
}

export default PadButton

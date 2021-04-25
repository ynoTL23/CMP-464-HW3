import React from 'react'
import DesignPadImage from '../assets/designpad.png'
import '../styles/DesignPad.css'

const DesignPad = () => {
  return (
    <button className='designpad-button'>
      <img src={DesignPadImage} />
    </button>
  )
}

export default DesignPad

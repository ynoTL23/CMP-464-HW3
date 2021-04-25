import React from 'react'
import DesignPad from './DesignPad'
import '../styles/DesignBoard.css'
const DesignBoard = () => {
  return (
    <div className='flex-container flex-wrap' id='pad-buttons'>
      <DesignPad />
      <DesignPad />
      <DesignPad />
      <DesignPad />
    </div>
  )
}

export default DesignBoard

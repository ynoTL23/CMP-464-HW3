import React from 'react'
import DesignPad from './DesignPad'
import '../styles/DesignBoard.css'

const DesignBoard = () => {
  return (
    <div className='designboard-container'>
      <DesignPad />
      <DesignPad />
      <DesignPad />
      <DesignPad />
      <DesignPad />
      <DesignPad />
    </div>
  )
}

export default DesignBoard

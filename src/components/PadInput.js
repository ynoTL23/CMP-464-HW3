import React from 'react'
import PadButton from './PadButton'
import '../styles/PadInput.css'

const PadInput = () => {
  return (
    <div className='PadInput'>
      <PadButton text='1' />
      <PadButton text='2' />
      <PadButton text='3' />
      <PadButton text='4' />
      <PadButton text='5' />
      <PadButton text='6' />
    </div>
  )
}
export default PadInput

import React from 'react'

import Header from './components/Header'
import PadInput from './components/PadInput'
import PadButton from './components/PadButton'
import DesignBoard from './components/DesignBoard'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='pad-container'>
        <PadInput />
        <PadButton text='1' />
        <PadButton text='2' />
        <PadButton text='3' />
        <PadButton text='4' />
        <PadButton text='5' />
        <PadButton text='6' />
      </div>
        <DesignBoard />
    </div>
  )
}

export default App

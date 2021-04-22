import React from 'react'

import Header from './components/Header'
import PadInput from './components/PadInput'
import PadButton from './components/PadButton'
import DesignBoard from './components/DesignBoard'
    
import './App.css'
import './styles/style.css'    

function App() {
  return (
    <div className='App'>
      <h1>Hello to the world of dev branch</h1>
      <Header />
      <PadInput />
      <DesignBoard />
      <div className='flex-container flex-column' id="pad-container">
        <div className='flex-container flex-wrap' id="pad-buttons">
          <PadButton />
          <PadButton />
          <PadButton />
          <PadButton />
        </div>
      </div>
    </div>
  )
}

export default App

import React from 'react'

import Header from './components/Header'
import PadInput from './components/PadInput'
import DesignBoard from './components/DesignBoard'
    
import './App.css'
import './styles/style.css'    

function App() {
  return (
    <div className='App'>
      <Header />
      <PadInput />
      <div className='flex-container flex-column' id="pad-container">
          <DesignBoard/>
      </div>
    </div>
  )
}

export default App

import React from 'react';
import './App.css';
import PadButton from './components/PadButton'
import './styles/style.css'

function App() {
  return (
    <div className="App">
      <h1>Hello to the world of josue branch</h1>
      <div className='flex-container flex-column' id="pad-container">
        <div className='flex-container flex-wrap' id="pad-buttons">
          <PadButton/>
          <PadButton/>
          <PadButton/>
          <PadButton/>
        </div>
      </div>

    </div>
  );
}

export default App;

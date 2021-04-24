import React from 'react'
import '../styles/boardstyle.css'
import PadButton from "./PadButton";
const DesignBoard = () => {
  return <>
      <div className='flex-container flex-wrap' id="pad-buttons">
          <PadButton />
          <PadButton />
          <PadButton />
          <PadButton />
      </div>
  </>
}

export default DesignBoard
import React from 'react';
import padButtonImage from '../padbutton.png'
import '../styles/PadButton.css'

function PadButton() {
    return(
        <div >
            <button className="padbutton-button"><img src={padButtonImage}/></button>
        </div>
    )
}

export default PadButton
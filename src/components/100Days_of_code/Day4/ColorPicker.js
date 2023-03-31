import React, { useState } from 'react'

// Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.

const ColorPicker = ({red, blue, green}) => {
    const [displayRed, setDisplayRed] = useState('none');
    const [displayBlue, setDisplayBlue] = useState('none');
    const [displayGreen, setDisplayGreen] = useState('none');

    const showRed = () =>{
        setDisplayRed('block')
    }
    const showBlue = () =>{
        setDisplayBlue('block')
    }
    const showGreen = () =>{
        setDisplayGreen('block')
    }
  return (
    <div>
      <h2>Solution 9:</h2>
      <div>
        <buttton style={{cursor:'pointer'}} onClick={showRed}>Red Color</buttton>
        <p style={{display:displayRed, color:red}}>{red}</p>
      </div>
      <div>
        <buttton style={{cursor:'pointer'}} onClick={showBlue}>Blue Color</buttton>
        <p style={{display:displayBlue, color:blue}}>{blue}</p>
      </div>
      <div>
        <buttton style={{cursor:'pointer'}} onClick={showGreen}>Green Color</buttton>
        <p style={{display:displayGreen, color:green}}>{green}</p>
      </div>
    </div>
  )
}

export default ColorPicker

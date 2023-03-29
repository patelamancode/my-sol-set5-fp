import React, { useState } from 'react';


const ZoomCounter = () => {
    let [fontSize, setFontSize] = useState(16);

    const IncreaseviewSize = () => {
        console.log(fontSize);
        fontSize += 5;
        if(fontSize <=51){
            setFontSize(fontSize);
        }
        
    }
    const DecreaseviewSize = () => {
        console.log(fontSize);
        fontSize -= 5;
        if(fontSize >1){
            setFontSize(fontSize);
        }
        
    }


  return (
    <div>
      <h1>Zoom In-Out</h1>
      <p style={{fontSize: `${fontSize}px`}}>Hey I am the data to operate</p>
      <div>
        <button style={{marginRight: "10px"}} onClick={IncreaseviewSize}>+</button>
        <button onClick={DecreaseviewSize}>-</button>
      </div>
    </div>
  )
}

export default ZoomCounter

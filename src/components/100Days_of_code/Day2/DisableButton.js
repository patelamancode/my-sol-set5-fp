import React, { useState } from 'react'

const DisableButton = () => {
    const [passOne, setPassOne] = useState("");
    const [passTwo, setPassTwo] = useState("");
    const [disable, setDisable] = useState(false)


    const passOneValue = (event) =>{
        setPassOne(event.target.value)
        
    }
    const passTwoValue = (event) =>{
        setPassTwo(event.target.value)
        
    }
    
    const checkPassword = () =>{
        if(passOne !== passTwo){
            setDisable(true)
            console.log(`Password 1: ${passOne}`);
            console.log(`Password 2: ${passTwo}`);
        }
    }
  return (
    <div>
    <h1>Disable submit button for password not match</h1>
      <input type={'password'} onChange={passOneValue}/>
      <input type={'password'} onChange={passTwoValue}/>
      <button disabled={disable} onClick={checkPassword}>Submit</button>
    </div>
  )
}

export default DisableButton

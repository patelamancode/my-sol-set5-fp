import React , { useState } from 'react'
import CharacterDetails from './CharacterDetails';

const Character = ({characterData}) => {

    const [currentCategory, setCurrentCategory] = useState()
  

    const setValueHandler = (char) =>{
      setCurrentCategory(char)
    }
    
  return (
    <div>
      <h2>Characters App for Heroes and Villain</h2>
      {Object.keys(characterData).map(char =><button onClick={() => setValueHandler(char)}>{char}</button>)}
      <CharacterDetails characterData={characterData} userChoiceCharacter={currentCategory}/>
    </div>
  )
}

export default Character

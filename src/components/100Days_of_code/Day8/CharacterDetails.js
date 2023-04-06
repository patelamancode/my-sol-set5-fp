import React from 'react'

const CharacterDetails = ({characterData, userChoiceCharacter}) => {
  return (
    <div>
      {userChoiceCharacter && characterData[userChoiceCharacter].map(({name,power,costume}) =>
      <div>
        <h3>{name}</h3>
        <p>Power : {power}</p>
        <p>Costume : {costume}</p>
      </div>)}
    </div>
  )
}

export default CharacterDetails

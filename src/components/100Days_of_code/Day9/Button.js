import React from 'react'

const Button = ({typeOfBooks}) => {

    const dataHandler = (selectedBtn) =>{
        
    }

  return (
    <div>
      <button>All Genres</button>
      {typeOfBooks.reduce((acc,curr) => acc.find(element => element===curr.genre) ? acc : [...acc, curr.genre] , []).map(el => <button key={el} onClick={() => dataHandler(el)}>{el}</button>)}
    </div>
  )
}

export default Button

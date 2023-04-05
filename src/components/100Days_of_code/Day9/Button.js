import React from 'react'

const Button = ({type}) => {

    

  return (
    <div>
      <button>All Genres</button>
      {type.reduce((acc,curr) => acc.find(element => element===curr.genre) ? acc : [...acc, curr.genre] , []).map(el => <button key={el}>{el}</button>)}
    </div>
  )
}

export default Button

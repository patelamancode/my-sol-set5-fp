import React, { useState } from 'react'

const ListForTodo = ({id,task}) => {

    const [isDone, setIsDone] = useState(false)

    const clickHandler = (clickedItem) =>{
        if(clickedItem === id){
            setIsDone(!isDone)
        }
    }
    const setStyleForList = () =>{
        if(isDone){
            return {
                textDecoration : 'line-through',
                color : 'red'
            }
        }
    }
  return (
    <div>
      <li key={id} style={setStyleForList()}>
        {task}<span>
            <button 
                style={{cursor:'pointer'}} 
                onClick={()=>clickHandler(id)}>{isDone ? 'Not done' : 'Mark as done'}
            </button>
            </span>
      </li>
    </div>
  )
}

export default ListForTodo

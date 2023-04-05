import React, { useState } from 'react'
import ListItem from './ListItem'

const Todo = ({todoItems}) => {

    const [items, setItems] = useState([todoItems])
    // const [completed, setCompleted] = useState(false)

    // const taskHandler = (id) =>{
    //     setItems([...Items , id])
        
    // }
    
  return (
    <div>
      <h2>Todo List</h2>
      {todoItems.map(({id,task}) =>
      <ListItem id={id} task={task}/>)}
    </div>
  )
}

export default Todo

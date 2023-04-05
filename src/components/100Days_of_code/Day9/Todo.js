import React from 'react'
import ListItem from './ListItem'

const Todo = ({todoItems}) => {    
  return (
    <div>
      <h2>Todo List</h2>
      {todoItems.map(({id,task}) =>
      <ListItem id={id} task={task}/>)}
    </div>
  )
}

export default Todo

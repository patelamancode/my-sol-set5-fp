import React from 'react'
import ListForTodo from './ListForTodo'

const Question5 = ({todoItems}) => {
  return (
    <div>
      <h2>Solution : 5</h2>
      <ul>
        {todoItems.map(({id,task})=>
        <ListForTodo id={id} task={task}/>)}
      </ul>
    </div>
  )
}

export default Question5

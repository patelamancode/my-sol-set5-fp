import React from 'react'

// Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color.

const Todo = ({todoItems}) => {
  return (
    <div>
      <h2>Solution 10 :</h2>
      {todoItems.map(({id,title,description,isCompleted}) =>
      <div key={id} style={{border:'solid 2px black', margin:'5px', display:'inline-block', padding:'10px', color: isCompleted ? 'green' : 'red'}}><h3>{title}</h3><p>{description}</p></div>)}
    </div>
  )
}

export default Todo

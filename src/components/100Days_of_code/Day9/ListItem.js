import React, { useState } from 'react'

const ListItem = ({id,task}) => {

    const [isDone, setIsDone] = useState(false)

    const taskHandler = (selectedItem) =>{
        if(selectedItem===id){
            setIsDone(!isDone)
        }
    }

  return (
    <div>
        <li key={id} 
            onClick={()=>taskHandler(id)} 
            style={{
                textDecoration: isDone && 'line-through', 
                cursor:'pointer'
                }}>
                {task}
        </li>
    </div>
  )
}

export default ListItem

import React, { useState } from 'react'

const ListItem = ({id,task}) => {

    // question 4 a,b
    // const [isDone, setIsDone] = useState(false)
    // const taskHandler = (selectedItem) =>{
    //     if(selectedItem===id){ 
    //         setIsDone(!isDone)
    //     }
    // }

    // question 4 c
    const [isDone, setIsDone] = useState(false)
    const taskHandler = (clickedItem) =>{
        if(clickedItem === id){
            setIsDone(!isDone)
        }  
    }


  return (
    // question 4 a,b
    // <div>
    //     <li key={id} 
    //         onClick={()=>taskHandler(id)} 
    //         style={{
    //             textDecoration: isDone && 'line-through', 
    //             cursor:'pointer'
    //             }}>
    //             {task}
    //     </li>
    // </div>

    // question 4 c
    <div>
        <li key={id} style={{textDecoration: isDone && 'line-through'}}>
        {task}<span><button onClick={()=> taskHandler(id)}>X</button></span>
        </li>
    </div>
  )
}

export default ListItem

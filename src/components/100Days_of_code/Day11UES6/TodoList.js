import React, { useEffect, useState } from 'react'
import fakeFetch from './todoAPI/fakeFetch'

const TodoList = () => {
    const [todo, setTodo] = useState([])

    const getData = async () =>{
        try{
            const res = await fakeFetch('https://example.com/api/todos')
            if(res.status === 200){
                setTodo(res.data.todos)
            }       
        }
        catch(error){
                
            }
    }
    useEffect(()=>{
        getData()
    }, [])



  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todo.map((item , i) =>
        <div style={{margin:'10px', borderBottom:'solid 2px black', paddingBottom:'10px'}}>
            <h1>{item.title} : {item.desc}</h1>
            <ol>
                {item.todos.map(el=><li>{el}</li>)}
            </ol>
        </div>)}
      </ul>
    </div>
  )
}

export default TodoList

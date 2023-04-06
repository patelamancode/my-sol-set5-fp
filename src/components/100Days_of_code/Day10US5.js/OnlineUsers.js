import React, { useEffect, useState } from 'react'
import { fakeFetch } from './api/fakeFetch'


const OnlineUsers = () => {
    
    const [listOfUsers, setListOfUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getDataFromAPI = async () =>{
        setIsLoading(true)
        try{
            const dataOfUsers = await fakeFetch('https://example.com/api/users/status');
            if(dataOfUsers.status === 200){
                setIsLoading(false)
                setListOfUsers(dataOfUsers.data.users)
            }
        }
        catch(error){
            console.log(error.message)
        }

    }
    useEffect(() =>{
        getDataFromAPI();
    } , [])

  return (
    <div>
      <h1>Login Users</h1>
      <p>{isLoading && 'Loading..'}</p>
      {listOfUsers.map((user , index) =>
      <li key={index} style={{color: (user.status === 'Online') ? 'green' : 'red'}}>{user.name} - {user.status}</li>)}
    </div>
  )
}

export default OnlineUsers

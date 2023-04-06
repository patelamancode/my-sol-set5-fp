import React, {useState, useEffect} from 'react'
import { fakeFetch } from './Profileapi/fakeFetch';
import Feed from './Feed';

const SocialProfile = () => {
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () =>{
        setIsLoading(true)
        try{
            const response = await fakeFetch('https://example.com/api/users');
            if(response.status===200){
                setUserData(response.data)
                setIsLoading(false)
            }
        }
        catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getData();
    }, [])
  return (
    <div>
      <h1>Social Profile</h1>
      <div>
        {isLoading ? 
            <p>Loading..</p> : 
            <Feed userData={userData}/>
        }
      </div>
    </div>
  )
}

export default SocialProfile

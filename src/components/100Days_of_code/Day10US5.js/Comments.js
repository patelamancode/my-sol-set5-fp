import React , {useState , useEffect}from 'react'
import { fakeFetch } from './Commnetapi/fakeFetch'
import CommentBox from './CommentBox'

const Comments = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [commentsData, setCommentsData] = useState([])
    
    const getData = async () =>{
        setIsLoading(true)
        try{
            const response = await fakeFetch('https://example.com/api/comments');
            if(response.status === 200){
                setIsLoading(false)
                setCommentsData(response.data.comments)
            }
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(() =>{
        getData();
    }, [])
   
  return (
    <div>
      <h1>Comments section</h1>
      {isLoading ? <p>Loading...</p> : <CommentBox commentsData={commentsData}/>}
    </div>
  )
}

export default Comments

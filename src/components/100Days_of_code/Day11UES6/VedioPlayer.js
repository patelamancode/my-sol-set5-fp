import React, { useEffect, useState } from 'react';
import fakeFetch from './vediosAPI/fakeFetch';
import VideoContainer from './VideoContainer';

const VedioPlayer = () => {

    const [videosData, setVideosData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () =>{
        setIsLoading(true)
        try{
            const response = await fakeFetch('https://example.com/api/videos')
            if(response.status === 200){
                setVideosData(response.data.videos)
                setIsLoading(false)
            }
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getData()
    }, [])

  return (
    <div>
      <h1>Multi-Player</h1>
      {!isLoading ? <VideoContainer videosData={videosData}/> : <p>Loading....</p>}
    </div>
  )
}

export default VedioPlayer

import React, { useState } from 'react'

const VideoContainer = ({videosData}) => {
    const [videosItem, setVideosItem] = useState(videosData)
    
    const removeDataFromPlaylist = () =>{
        videosItem.splice(0, 1)
        setVideosItem([...videosItem])
    }

  return (
    <div>
        <div >
            <h2>PlayList</h2>
            <button onClick={removeDataFromPlaylist}>Delete Video</button>
        </div>
        {(videosItem.length === 0) ? <p><b>Empty list ☹️</b> please add some new videos</p> : videosItem.map((item, index) =>
        <div key={index} style={{display:'inline-flex', margin:'15px',padding:'10px', border:'solid 1px black'}}>
            <div>
                <img src={item.thumbnail} alt={item.title}/>
                <p><b>{item.title}</b></p>
                <p><b>❤️ :</b> {item.likes}</p>
                <p><b>👀 :</b> {item.views}</p>
            </div>
        </div>)}
    </div>
  )
}

export default VideoContainer

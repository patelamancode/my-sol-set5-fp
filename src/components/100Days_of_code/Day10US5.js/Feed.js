import React from 'react'

const Feed = ({userData}) => {
  return (
    <div>
      {userData.map(user =>
      <div style={{border:'solid 1px black', margin:'10px', padding:'10px'}}>
            <img src={user.image} alt='loading..' style={{border:'solid 2px black', height:'200px', width:'20%'}}/>
            <p>{user.name}</p>
            <p>Likes :{user.likes}</p>
            <p>Comments :{user.comments}</p>
        </div>
      )}
    </div>
  )
}

export default Feed

import React , {useState} from 'react'

const CommentBox = ({commentsData}) => {
    
    const [updatedData, setUpdatedData] = useState(commentsData)
    

    const handleDelete = (index) =>{
        const newCommentsData = [...updatedData];
        newCommentsData.splice(index,1);
        setUpdatedData(newCommentsData)
    }
    
  return (
    <div>
      <ul>
        {updatedData.map((item, index) =>
        <div key={index} style={{border:'solid 2px black', margin: '15px 5px', padding:'10px 2px'}}>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </div>)}
      </ul>
    </div>
  )
}

export default CommentBox

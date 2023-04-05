import React from 'react'

const BookPage = ({id,title,author}) => {
    
  return (
    <div>
      <div key={id}>
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
      </div>
    </div>
  )
}

export default BookPage

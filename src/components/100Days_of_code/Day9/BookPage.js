import React from 'react'

const BookPage = ({bookData,selectedData}) => {

  return (
    <div>
      {selectedData.map(({id,title,author}) =>
      <div key={id}>
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
      </div>)}
    </div>
  )
}

export default BookPage

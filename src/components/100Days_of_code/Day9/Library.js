import React from 'react'
import BookPage from './BookPage'
import Button from './Button'

const Library = ({bookData}) => {
  return (
    <>
      <h2>Book Library</h2>
      <Button type={bookData}/>
      {bookData.map(({id,title,author,genre}) =>
      <BookPage id={id} title={title} author={author}/>)}
    </>
  )
}

export default Library

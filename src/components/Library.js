import React from 'react'

// Create an array of objects representing books in a library. Each object has the following properties: id, title, author, and rating. Write a React component that takes the array of books as input and returns an unordered list of books, where each list item displays the book's title, author, and rating.

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 9 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 8 },
    { id: 3, title: '1984', author: 'George Orwell', rating: 9 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 7 }
  ];

function Library() {
  return (
    <>
      <h1>Library</h1>
      <ul>
        {books.map(({title, author, rating}) =>
        <li>Book : {`"${title}"`} 's author is : {author} with rating : {rating}</li>)}
      </ul>
    </>
  )
}

export default Library


import React, { useState } from 'react'
import BookPage from './BookPage'
// import Button from './Button'

const Library = ({bookData}) => {
    const [selectedData, setSelectedData] = useState(bookData)
    // const [clickedOPtion, setClickedOption] = useState(null)

    const dataHandler = (event) =>{
        const data = bookData.filter(({genre}) => event===genre)
        setSelectedData(data)
    }
    const ShowAllData = () => setSelectedData(bookData)

  return (
    <>
      <h2>Book Library</h2>
      {/* <Button typeOfBooks={bookData}/> */}
      <div>
        <button onClick={ShowAllData}>All Genres</button>
        {bookData.reduce((acc,curr) => acc.find(element => element===curr.genre) ? acc : [...acc, curr.genre] , []).map(el => <button key={el} onClick={() => dataHandler(el)}>{el}</button>)}
      </div>
      <BookPage bookData={bookData} selectedData={selectedData}/>
    </>
  )
}

export default Library

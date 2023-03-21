// 1. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.

import React from 'react'

const movies = [
    {id:1, title:"DDLJ", director:"Yash Raj"},
    {id:2, title:"Raaz", director:"Anurag Kasyap"},
    {id:3, title:"Border", director:"Yash Raj"}
]

function Watchlist() {
  return (
    <>
      <h1>Watchlist</h1>
      <ul>
        {movies.map(({title, director}) =>(
            <li>{title} and director is {director}</li>
        ))}
      </ul>
    </>
  )
}

export default Watchlist;

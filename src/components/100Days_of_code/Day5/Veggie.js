import React from 'react'

// Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.

const Veggie = ({itemData}) => {
  return (
    <div>
      <h2>Solution 5: </h2>
      <ol>
        {itemData.map(({id,name,pickData}) =>
        <li key={id}></li>)}
      </ol>
    </div>
  )
}

export default Veggie

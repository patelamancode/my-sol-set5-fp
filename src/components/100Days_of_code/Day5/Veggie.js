import React, { useState } from 'react'

// Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.

const Veggie = ({itemData}) => {
    const [showItem, setShowItem] = useState(false)

    const displayFreshVeggie = () => setShowItem(!showItem);

  return (
    <div>
      <h2>Solution 5: </h2>
      <button onClick={displayFreshVeggie}>Highlight Fresh Vegetables</button>
      <ol>
        {itemData.map(({id,name,pickDate}) =>
        <div key={id} style={{color: (showItem && pickDate === '2023-03-30')? 'green' : 'black'}}><li>{name} & {pickDate}</li></div>)}
      </ol>
    </div>
  )
}

export default Veggie

import React, { useState } from 'react'

// Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.

const MyGadgets = ({productData}) => {

    const [isOn, setIsOn ] = useState(false);

    const showList = () =>{
        setIsOn(!isOn)
    }

    const listStyle = (price) => ({
        border: ' solid 2px pink',
        margin:'5px', 
        backgroundColor: price > 50000 && isOn ? 'green' : ''})

  return (
    <div>
      <h2>Solution 8:</h2>
      <ol style={{border: ' solid 2px black'}}>
        {productData.map(({id,name,description,price})=>
        <li key={id} style={listStyle(price)}>{name} , <em>{description}</em> Rs.{price}</li>)}
      </ol>
      <button style={{cursor:'pointer'}} onClick={showList}>Highlight-Expensive-items</button>
    </div>
  )
}

export default MyGadgets

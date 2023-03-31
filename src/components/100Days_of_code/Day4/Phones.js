import React from 'react'


// Build a React component called Phones that receives an array of products as a prop. Display only the mobile phones as an unordered list. Display their name, description, and price on the DOM.


const Phones = ({productData}) => {
  return (
    <div>
      <h2>Solution 5:</h2>
      <ul style={{border:'solid 2px black'}}>
        {productData.map(({id,name,description,price}) => 
        <li key={id} style={{border:'solid 1px blue', margin:'5px'}}>{name}, {description} with : Rs.{price}</li>)}
      </ul>
    </div>
  )
}

export default Phones

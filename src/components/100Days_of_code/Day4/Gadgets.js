import React from 'react'

// Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.

const Gadgets = ({productData}) => {

    const isRed = (value) => { if(value > 50000) return "gray"; } 

  return (
    <div>
      <h2>Solution 4:</h2>
      <ol style={{border:'solid 2px black'}}>
        {productData.map(({id,name,price,description}) =>
        <li key={id} style={{border:'solid 1px blue', margin:'5px', backgroundColor: isRed(price)}}>{name} <br/><em>{description}</em><br/>{price}</li>)}
      </ol>
    </div>
  )
}

export default Gadgets

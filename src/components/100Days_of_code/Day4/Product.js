import React from 'react'

// Build a Product component that receives product name and price as props and displays them on DOM.
// The name should be in bold and blue in color
// Price should be in italics and green in color

const Product = ({productName, price}) => {
  return (
    <div>
      <h2>Solution 2:</h2>
      <p><b style={{color:'blue'}}>{productName}</b> : <em style={{color:'green'}}>{price}</em></p>
    </div>
  )
}

export default Product

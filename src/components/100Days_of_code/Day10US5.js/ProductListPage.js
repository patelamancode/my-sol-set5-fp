import React from 'react'

const ProductListPage = ({productData, isLoading}) => {
  
  return (
    <div>
      <h2>Hey I am Product List</h2>
      <div>
        <p>{isLoading && 'Loading..'}</p>
        {productData.map((item,index)=>
        <li key={index}>{item.name} -- Rs. {item.price} -- {item.quantity}</li>)}
      </div>
    </div>
  )
}

export default ProductListPage

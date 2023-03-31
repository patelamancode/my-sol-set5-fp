import React from 'react'
import './productcard.css';

const ProductCard = () => {
  return (
    <div>
      <h1>Product Card</h1>
      <div className='product-card'>
        <div className='product-image'>
         <img src="https://m.media-amazon.com/images/I/61kqhTCKtgL._AC_UL320_.jpg" alt='' />
        </div>
        <div className='product-details'></div>
      </div>
    </div>
  )
}

export default ProductCard

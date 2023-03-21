import React from 'react'

//  Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.

const products = [
    { id: 1, name: 'Book', price: 10, category: "study-material" },
    { id: 2, name: 'T-Shirt', price: 15, category: "clothes" },
    { id: 3, name: 'Hat', price: 8, category: "fashion-stuff" },
    { id: 4, name: 'Sunglasses', price: 12, category: "fashion-stuff" }
  ];
  

function Onlinestore() {
  return (
    <>
      <h1>Online Store</h1>
      <ul>
        {products.map(({id, name, price,category}) => 
        <li style = {{color :'blue'}}>Product name is : {name}, with price : {price}, and category is : {category}</li> 
        )}
      </ul>
    </>
  )
}

export default Onlinestore;

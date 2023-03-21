import React from 'react'

// Sample question

// You are building a shopping cart app with React. You have an array of objects called items, representing the items in the cart, with each object having the following properties:

// You also have a variable called total, that contains the total price of all the items in the cart:

// ```jsx
// const total = 45;
// ```

// Using React's map method, write code that generates an unordered list (ul) with one list item (li) for each item in the items array. Each list item should display the item's name and price in the following format:



// The li elements should be wrapped in a div element that contains a heading (h1) with the text "Shopping Cart" and a paragraph (p) that displays the total price in the following format:
// The li elements should each have a unique key attribute based on the item's id property.

const items = [
  { id: 1, name: 'Book', price: 10 },
  { id: 2, name: 'T-Shirt', price: 15 },
  { id: 3, name: 'Hat', price: 8 },
  { id: 4, name: 'Sunglasses', price: 12 },
];


function Cart() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}: ( {item.price} )
          </li>
        ))}
      </ul>
      <p>Total : {items.reduce((initialSum, {price}) => initialSum+ price , 0)}</p>
    </>
  )
}


export default Cart;

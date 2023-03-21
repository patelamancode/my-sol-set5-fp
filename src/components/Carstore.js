import React from 'react'

// Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.

const cars = [
{ id: 1, make: "Maruti", model: 2000, price: 50000 },
{ id: 2, make: "Maruti1", model: 2002, price: 70000 },
{ id: 3, make: "Maruti2", model: 2000, price: 60000 },
];

function Carstore() {
  return (
    <>
      <h1>Car Store</h1>
      <ul>
        {cars.map(({make, model, price}) =>(
            <li>{make}, {model}, {price}</li>
        ))}
      </ul>
    </>
  )
}

export default Carstore;

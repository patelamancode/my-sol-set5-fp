import React, { useState } from 'react'

const Grocery = ({itemList}) => {

    const [products, setProducts] = useState(itemList);
    const [color, setColor] = useState('');

    const btnItem = itemList.reduce((acc,curr)=> (acc.find(el => curr.category === el.category )) ? acc : [...acc, curr] ,[])

    const dataHandler = (category) =>{
        const data = itemList.filter(item => item.category === category);
        setProducts(data)
        if(category==='Vegetable'){
            setColor('green')
        } else setColor('orange')
    }
    const showAllItems = () =>{
        setProducts(itemList)
        setColor('black')
    }


  return (
    <div>
      <h2>List Item from Grocery</h2>
      <div>
        <button onClick={showAllItems}>All</button>
        {btnItem.map(({category}) =><button onClick={() => dataHandler(category)}>{category}</button>)}
      </div>
      <div>
        {products.map(({id,name}) =><li key={id} style={{color: color}}>{name}</li>)}
      </div>
    </div>
  )
}

export default Grocery

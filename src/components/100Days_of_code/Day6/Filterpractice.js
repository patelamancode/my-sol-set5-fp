import React, { useState } from 'react'

const Productlist = ({data, userInput}) =>{

  const filterData = (data) =>{
    if(!userInput){
      return data;
    }else return data.filter(({price}) => price < userInput)
  }
  return(
    <div>
      <ol>
        {filterData(data).map(({id,name,price,category}) =>
        <div key={id} 
             style={{
              border:'solid 2px black',
              display:'inline-block',
              margin:'5px',
              padding:'10px',
              }}>
          <p>Name: {name}</p>
          <p>Price : Rs.{price}</p>
          <p>Category :{category}</p>
        </div>
        )}
      </ol>
    </div>
  )
}

const Filterpractice = ({dataItem}) => {

  const [userInputPrice, setUserInputPrice] = useState()

  const getUserInput = (event) =>{
    setUserInputPrice(parseInt(event.target.value))
  }
   
  return (
    <div>
      <h2>Filter from Wishlist</h2>
      <input placeholder={'Filter with price'} onChange={getUserInput}/>
      <Productlist data={dataItem} userInput={userInputPrice}/>
    </div>
  )
}

export default Filterpractice;

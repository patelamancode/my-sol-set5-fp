import React, { useEffect, useState } from 'react';
import fakeFetch from './Db9';

const Solution9 = () => {
    const [serverData, setServerData] = useState([]);
    const [updatedData, setUpdatedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    
    

    const getData = async () =>{
        setIsLoading(true)
        try{
            const response = await fakeFetch("https://example.com/api/products");
            if(response.status === 200){
                setIsLoading(false)
                setServerData(response.data.products)
                setUpdatedData(response.data.products.sort((a,b) => a.rating < b.rating ? 1 : -1))
            }
        }
        catch (error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getData();
    }, [])

    const min = updatedData[updatedData.length-1].price;
    const max = updatedData[0].price
    console.log(min,max);

    
    // const sortedData = () => {  
    //     const newData = serverData.sort((a,b) => a.rating < b.rating ? 1 : -1) 
    //     setUpdatedData(newData)
    // }
    // useEffect(()=>{
    //     sortedData()
    // })

    const handleUserInput = (event) =>{
        const userInput = event.target.value.toUpperCase();
        const dataForUser = serverData.filter((item) => item.name.toUpperCase().includes(userInput) )
        if(dataForUser.length > 0){
            setUpdatedData(dataForUser)
        }
        else{
            setUpdatedData(serverData)
        }
    }
    // const userPriceHandler = (e) =>{
    //     const userInput = e.target.value;
    //     setUpdatedData(serverData.filter())
    // } 
    

  return (
    <div>
      <h1>Solution 9 from set 7</h1>
      <h2>Products</h2>
      <div>
        <input type='text' onChange={handleUserInput}/>
        {/* <p>Filter with Price :
            <input type='range' onChange={userPriceHandler} />
        </p> */}
    </div>
      <p>{isLoading && 'Loading....'}</p>
      {updatedData.map(({name, price, quantity, rating} ,index)=>
      <div key={index} style={{border: 'solid 2px black' , margin: '20px', borderRadius: '15px'}}>
        <div style={{display:'inline-flex'}}>
            <p style={{paddingRight: '3rem'}}>{name}</p>
            <p>Rating : {rating}</p>
        </div>
        <div><p><b>Price : </b>${price}</p></div>
        <div><p><b>Quantity : </b>{quantity}</p></div>
      </div>
      )}
    </div>
  )
}

export default Solution9

import React, { useEffect, useState } from 'react'
import fakeFetch from './productAPI/fakeFetch';
import ProductPage from './ProductPage';


const Question1 = () => {

    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () =>{
        setIsLoading(true)
        try{
            const responseData = await fakeFetch('https://example.com/api/products')
            if(responseData.status === 200){
                setIsLoading(false)
                setProductData(responseData.data.products)
            }
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getData();
    }, [])
    
  return (
    <div>
      <h1>Shop Now 🛒</h1>
      <p>{isLoading && 'Loading....'}</p>
      <ProductPage productData={productData}/>
    </div>
  )
}

export default Question1;

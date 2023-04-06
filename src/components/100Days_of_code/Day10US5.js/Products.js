import React, { useEffect, useState } from 'react'
import ProductListPage from './ProductListPage'
import { fakeFetch } from './ProductAPI/fakeFetch'

const Products = () => {

    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () =>{
        setIsLoading(true)
        try{
            const itemData = await fakeFetch('https://example.com/api/products')
            if(itemData.status === 200){              
                setIsLoading(false)
                setProductData(itemData.data.products)
            }
        }
        catch (error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getData()
    }, [])

    const showFilteredData = () =>{
        const filteredData = productData.filter((item)=> item.quantity > 20)
        setProductData(filteredData)
    }
    const showFilteredDataWithPrice = () =>{
        const filteredDataWithPrice = productData.filter(item => item.price < 100)
        setProductData(filteredDataWithPrice)
    }
    
  return (
    <div>
      <h1>Products</h1>
      <button onClick={showFilteredData}>Show Product with quantity more that 20</button>
      <button onClick={showFilteredDataWithPrice}>Show Product with Price less than 100</button>
      {/* <select onClick={showFilteredData}>
        <option value='All'>All</option>
        <option value=''>Quantity more than 20</option>
        <option>Price less than 100</option>
      </select> */}
      <ProductListPage productData={productData} isLoading={isLoading}/>
    </div>
  )
}

export default Products

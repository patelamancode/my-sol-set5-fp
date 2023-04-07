import React , {useState} from 'react'

const ProductPage = ({productData}) => {
    const [itemData, setItemData] = useState([...productData])
    console.log(itemData);


    const showClickedData = (event) =>{
        const filteredData = productData.filter(({name}) => event === name);
        setItemData(filteredData)
    }

    
  return (
    <div>
        {productData.map(({name}) => <button onClick={() => showClickedData(name)}>Show {name}</button>)}
        {itemData.map( (item) =>
        <div style={{margin:'30px', padding:'15px' , border:'solid 1px black'}}>
            <img src={item.src} alt={item.name}/>
            <p>Name : {item.name}</p>
            <p>Price : Rs.{item.price}</p>
            <p>Description : {item.description}</p>
        </div>
      )}
    </div>
  )
}

export default ProductPage

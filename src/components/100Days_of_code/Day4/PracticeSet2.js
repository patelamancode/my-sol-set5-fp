import React from 'react'
import Greetings from './Greetings'
import Product from './Product'
import { userData , products } from '../../Database'
import UserProfileCard from './UserProfileCard'
import Gadgets from './Gadgets'




const PracticeSet2 = () => {
  return (
    <div>
      <h1>Practice set 2 react</h1>
      <Greetings name={"Aman"}/>
      <Product productName={"Show your work"} price={180}/>
      <UserProfileCard userDetails={userData}/>
      <Gadgets productData={products}/>
    </div>
  )
}

export default PracticeSet2

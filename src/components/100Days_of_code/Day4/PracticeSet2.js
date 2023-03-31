import React from 'react'
import Greetings from './Greetings'
import Product from './Product'
import { userData , products , product2 , title, content , heading, name, learning ,product3 , todoItems} from '../../Database'
import UserProfileCard from './UserProfileCard'
import Gadgets from './Gadgets'
import Phones from './Phones'
import Article from './Article'
import About from './About'
import MyGadgets from './MyGadgets'
import ColorPicker from './ColorPicker'
import Todo from './Todo'




const PracticeSet2 = () => {
  return (
    <div>
      <h1>Practice set 2 react</h1>
      <Greetings name={"Aman"}/>
      <Product productName={"Show your work"} price={180}/>
      <UserProfileCard userDetails={userData}/>
      <Gadgets productData={products}/>
      <Phones productData={product2}/>
      <Article title={title} content={content}/>
      <About heading={heading} name={name} learning={learning}/>
      <MyGadgets productData={product3}/>
      <ColorPicker red={'#EE4B2B'} blue={'#89CFF0'} green={'#7FFFD4'} />
      <Todo todoItems={todoItems}/>
    </div>
  )
}

export default PracticeSet2

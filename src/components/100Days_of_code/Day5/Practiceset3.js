import React from 'react'
import { cartoons , DonationData , vegetables } from '../../Database'
import Cars from './Cars'
import Cartoon from './Cartoon'
import Image from './Image'
import Ngo from './Ngo'
import Veggie from './Veggie'

const Practiceset3 = () => {
  return (
    <div>
      <h1>Practice set 3 react</h1>
      <Image imageSrc={'https://picsum.photos/200'} height={'300px'} width={'300px'}/>
      <Cartoon cartoonsData={cartoons}/>
      <Veggie itemData={vegetables}/>
      <Ngo data={DonationData}/>
      <Cars />
      
    </div>
  )
}

export default Practiceset3

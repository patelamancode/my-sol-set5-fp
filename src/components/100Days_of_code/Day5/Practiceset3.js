import React from 'react'
import { cartoons } from '../../Database'
import Cartoon from './Cartoon'
import Image from './Image'

const Practiceset3 = () => {
  return (
    <div>
      <h1>Practice set 3 react</h1>
      <Image imageSrc={'https://picsum.photos/200'} height={'300px'} width={'300px'}/>
      <Cartoon cartoonsData={cartoons}/>
    </div>
  )
}

export default Practiceset3

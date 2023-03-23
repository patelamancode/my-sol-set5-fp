import React, {useState} from 'react';


const Levelzeroreact = () => {

    let [likeCounter, setLikeCounter] = useState(0);

    const increaseLikeCounter = () =>{
        likeCounter += 1;
        setLikeCounter(likeCounter);
    }






  return (
    <>
      <h1>React practice from level zero</h1>
      <button onClick = {increaseLikeCounter}>Like Me !</button> {likeCounter}
    </>
  )
}

export default Levelzeroreact

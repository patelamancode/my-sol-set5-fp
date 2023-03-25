import React, {useState} from 'react';


const Levelzeroreact = () => {

    // counter
    let [likeCounter, setLikeCounter] = useState(0);
    const increaseLikeCounter = () =>{
        likeCounter += 1;
        setLikeCounter(likeCounter);
    }
    // Input form for user age and check on it 
    let [userAge, setUserAge] = useState('');
    let [errorMessage, setErrorMessage] = useState('');
     
    const getUserAge =(event) =>{
        setUserAge(parseInt(event.target.value));
    }
    const checkUserAge = () => (userAge > 18) ? setErrorMessage("You are IN") : setErrorMessage("You are OUT");

    // Password checker
      const [passOne , setPassOne] = useState('');
      const [passTwo , setPassTwo] = useState('');

      const getPassOne = (e) => setPassOne(e.target.value);
      const getPassTwo = (e) => setPassTwo(e.target.value);  

      const checkHandler = () => (passOne === passTwo) ? setErrorMessage('🤗 !! Matched ' ) : setErrorMessage("☹️ !! Not matched");;

    // 



  return (
    <>
      {/* counter */}
      <h1>React practice from level zero</h1>
      <button onClick = {increaseLikeCounter}>Like Me !</button> {likeCounter}

      {/* Age checker */}
      {/* <h1>Welcome to age checker</h1>
      <input onChange={getUserAge}/>
      <button onClick={checkUserAge}>Check Age !</button>
      <h3>{errorMessage}</h3> */}

      {/* Password checker */}
      {/* <h1>Password Checker</h1>
      <input type={'password'} onChange={getPassOne}/>
      <input type={'password'} onChange={getPassTwo}/>
      <button onClick={checkHandler}>Check</button>
      <h3>Result : {errorMessage}</h3> */}
    </>
  )
}

export default Levelzeroreact

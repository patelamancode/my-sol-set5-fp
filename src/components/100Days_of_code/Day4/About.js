import React, { useState } from 'react'

// Build a React component called About that accepts three props: heading, your name and learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your name and a button below that which says “Know More”. On the click of the button, show the learning in a <p> tag just below the button.

const About = ({heading, name, learning}) => {
    const [visible, setVisible] = useState('none');

    const showItem = () =>{
        setVisible('block');
    }

  return (
    <div>
      <h2>Solution 7:</h2>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={showItem}>Know more..</button>
      <p style={{display: visible}}>{learning}</p>
    </div>
  )
}

export default About

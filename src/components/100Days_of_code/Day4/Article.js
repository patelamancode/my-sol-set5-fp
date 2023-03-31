import React, { useState } from 'react'

// Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.

const Article = ({title, content}) => {

    const [display, setDisplay] = useState('none');

    const showContent = () =>{
        setDisplay('block');
    }
    const hideItem = () =>{
        setDisplay('none')
    }

  return (
    <div>
      <h2>Solution 6:</h2>
      <h1>{title}</h1>
      <button style={{cursor:'pointer'}} onClick={showContent}>Know more..</button>
      <p style={{display: display}}>{content} <span style={{color: 'blue', cursor:'pointer', display: display}} onClick={hideItem}>hide item..</span></p>
    </div>
  )
}

export default Article

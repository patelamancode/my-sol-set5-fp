import React from 'react'

// Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. Image link - https://picsum.photos/200


const Image = ({imageSrc, height, width}) => {
  return (
    <div>
      <h2>Solution 1:</h2>
      <img src={imageSrc} alt='loading..' 
      style={{
        height: height,
        width: width
      }}/>
    </div>
  )
}

export default Image

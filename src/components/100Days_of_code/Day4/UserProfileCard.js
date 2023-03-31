import React from 'react'

// Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.

const UserProfileCard = ({userDetails}) => {
    const {name, age, email} = userDetails;
  return (
    <div>
      <h2>Solution 3:</h2>
      <div style={{border:'solid 1px black', display:'inline-block' , padding: '10px'}}>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default UserProfileCard

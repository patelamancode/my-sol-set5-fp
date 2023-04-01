import React from 'react'

// Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5. Data:

const Cartoon = ({cartoonsData}) => {
  return (
    <div>
      <h2>Solution 2:</h2>
      <div>
        {cartoonsData.filter(({magnitude}) => magnitude > 5 ).map(({id,name,superpower}) =>
        <li key={id}>{name}<br/><p>{superpower}</p></li>)}
      </div>
    </div>
  )
}

export default Cartoon;
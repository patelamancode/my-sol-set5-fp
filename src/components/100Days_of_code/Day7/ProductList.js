import React from 'react'

const ProductList = ({listItem, userInputData}) => {

    const filteredEventData = () => (userInputData.length > 0) ? listItem.filter(({eventType}) => userInputData.includes(eventType)) : listItem ;
       
  return (
    <div>
      <div>
        {filteredEventData().map(({name,date,location,ticketPrice}) => 
        <div 
            style={{
              border:'solid 2px black',
              display:'inline-block',
              margin:'5px',
              padding:'10px',
              }}>
            <p>Event : {name}</p>
            <p>Date : {date}</p>
            <p>Location : {location}</p>
            <p>Ticket Price : {ticketPrice}</p>
        </div>)}
      </div>
    </div>
 )
}

export default ProductList

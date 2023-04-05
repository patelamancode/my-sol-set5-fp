import React, { useState } from 'react';
import ProductList from './ProductList';

const EventList = ({listItem}) => { 
    const [checkboxValue, setCheckboxValue] = useState([])

    const differentEvents = listItem.reduce((acc, {eventType})=> (acc.includes(eventType)) ? acc : [...acc, eventType] ,[])


    const handleCheckboxValue = (e) =>{
        const event = e.target.value;
        const IsChecked = e.target.checked;
        if(IsChecked){
            setCheckboxValue([...checkboxValue, event])
        } else {
            setCheckboxValue(checkboxValue.filter((boxValue) => boxValue !== event))
        }
    }

  return (
    <div>
      <h2>Event List with some details</h2>
      <div>
        {differentEvents.map(event =>
            <label>
                <input type='checkbox' value={event} onChange={handleCheckboxValue}/>
                {event}
            </label>
        )}
      </div>
      <ProductList listItem={listItem} userInputData={checkboxValue}/>
    </div>
  )
}

export default EventList

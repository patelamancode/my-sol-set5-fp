import React from 'react'

const Bouquet = ({itemData}) => {
  return (
    <div>
      <h2>Solution : 6</h2>
      <div>
        {itemData.filter(({flowers}) => flowers.find('rose')).reduce((totalSum, {price}) => totalSum+price, 0).map(totalSum =>
        <p>{totalSum}</p>)}
      </div>
    </div>
  )
}

export default Bouquet

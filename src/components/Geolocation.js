import React from 'react';

// const url = 'https://geocode.xyz/51.50354,-0.12768?geoit=json';


const whereAmI = () => {
    fetch(`https://coffee.alexflipnote.dev/Wi2tVKk1tDQ_coffee.png`)
    .then(res => res.json())
    .then(data => console.log(data))
}


whereAmI()


// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))









const Geolocation = () => {
  return (
    <div>
      <h1>Hello Geolaction component from Jonas</h1>
    </div>
  )
}

export default Geolocation

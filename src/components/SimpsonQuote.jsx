import React from 'react';

function SimpsonQuote ({ quote, character, image }) {
  return(
    <div>
      <p><strong>{quote}</strong></p>
      <p>{character}</p>
      <img src={image} alt='{character}' />
    </div>)
};


export default SimpsonQuote;
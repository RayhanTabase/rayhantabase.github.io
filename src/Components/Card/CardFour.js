import React from 'react';
import './css/card.css'

const CardFour = ({icon, title, text}) => {
  return (
    <div className='card-four card'>
      <div className='image'>
        <img className='' src={icon} alt={`${title}`} />
      </div>
      <h3 className='title'>
        {title}
      </h3>
      <p className='text'>
        {text}
      </p>
    </div>
  );
}

export default CardFour;

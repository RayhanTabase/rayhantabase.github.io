import React from 'react';
import './css/card.css'

const CardFour = ({icon, linkedInLink, title, text}) => {
  return (
    <div className='card-four card'>
      <a href={linkedInLink} className='container-icon'>
        <img className='icon' src={icon} alt={`${title}`} />
      </a>
      <h3 className='title color-secondary'>
        {title}
      </h3>
      <p className='text color-secondary'>
        {text}
      </p>
    </div>
  );
}

export default CardFour;

import React from 'react';
import './card.css'

const CardOne = ({thumbnail, title, text}) => {
  return (
    <div className='card-one card'>
      <div>
        <img className='icon-color1' src={thumbnail} alt={`${title}`} />
      </div>
      <div>
        {title}
      </div>
      <div>
        {text}
      </div>
    </div>
  );
}

export default CardOne;

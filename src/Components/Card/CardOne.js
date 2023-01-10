import React from 'react';
import './css/card.css'

const CardOne = ({thumbnail, title, text, action=null}) => {
  return (
    <div className='card-one card'>
      <div>
        <img className='icon-color1' src={thumbnail} alt={`${title}`} />
      </div>
      <div className='color-secondary'>
        {title}
      </div>
      <div>
        {text}
      </div>
      {
        action &&
        <a href={action.link}>{action.text}</a>
      }
    </div>
  );
}

export default CardOne;

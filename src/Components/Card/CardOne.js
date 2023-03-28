import React from 'react';
import './css/card.css'

const CardOne = ({thumbnail, title, text, action=null}) => {
  return (
    <div className='card-one card'>
      <div className='card-thumbnail'>
        {thumbnail}
      </div>
      <div className='card-title color-secondary'>
        {title}
      </div>
      <div className='card-text color-secondary'>
        {text}
      </div>
      {
        action &&
        <a className='card-link-redirect color-secondary' href={action.link}>{action.text}</a>
      }
    </div>
  );
}

export default CardOne;

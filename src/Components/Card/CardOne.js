import React from 'react';
import './css/card.css'

const CardOne = ({thumbnail, title, text, action=null}) => {
  return (
    <div className='card-one card'>
      <div>
        <img className='icon-color1' src={thumbnail} alt={`${title}`} />
      </div>
      <div className='color-main-2'>
        {title}
      </div>
      <div className='color-tertiary'>
        {text}
      </div>
      {
        action &&
        <a className='color-main' href={action.link}>{action.text}</a>
      }
    </div>
  );
}

export default CardOne;

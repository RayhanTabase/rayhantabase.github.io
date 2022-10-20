import React from 'react';

const CardOne = ({thumbnail, title, text}) => {
  return (
    <div className='card-one'>
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

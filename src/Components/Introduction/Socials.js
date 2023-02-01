import React from 'react';

const Social =({name, icon, url}) => {
  return (
    <a href={`${url}`} target="_blank" rel="noopener noreferrer">
      <img className='icon-color1 icon-social-hover' src={icon} alt={`${name}`} />
    </a>
  );
}

export default Social;

import React from 'react';
import './card.css'

const CardThree = ({image, title, text, skills}) => {
  return (
    <div className='card-three card'>
      <div>
        <img className='' src={image} alt={`${title}`} />
      </div>
      <div>
        {title}
      </div>
      <div>
        {text}
      </div>
      <div>
        {skills.map((skill) => (
          <div className="item"> 
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardThree;

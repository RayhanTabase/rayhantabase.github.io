import React from 'react';
import './card.css'

const CardThree = ({image, title, text, skills, repo="", live=""}) => {
  return (
    <div className='card-three card'>
      <div className='image'>
        <img className='' src={image} alt={`${title}`} />
      </div>
      <h3 className='title'>
        {title}
      </h3>
      <p className='text'>
        {text}
      </p>
      <div className='skills'>
        {skills.map((skill) => (
          <div className="item"> 
            <p>{skill}</p>
          </div>
        ))}
      </div>
      <div className='buttons'>
        <button className='btn-style-1'>
          Github
        </button>
        <button className='btn-style-2'>
          View Site
        </button>
      </div>
    </div>
  );
}

export default CardThree;

import React from 'react';
import GithubIcon from '../../Assets/github.svg';
import './card.css'

const CardTwo = ({category, skills=[]}) => {
  return (
    <div className='card-two card'>
      <h3>{category}</h3>
      {skills.map((skill) => (
        <div> 
          <div> 
            <img className='icon-color1' src={GithubIcon} alt={`${skill}`} />
          </div>
          <p>{skill}</p>
        </div>
      ))}
    </div>
  );
}

export default CardTwo;

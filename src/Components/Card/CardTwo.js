import React from 'react';
import GithubIcon from '../../Assets/github.svg';
import './css/card.css'

const CardTwo = ({category, skills=[]}) => {
  return (
    <div className="card-two card">
      <h3 className="title color-main-2">{category}</h3>
      <div className="items-list">
        {skills.map((skill) => (
          <div className="item"> 
            <div className='container-icon'> 
              <img className='icon-color1' src={GithubIcon} alt={`${skill}`} />
            </div>
            <p className='container-skill-text color-secondary' >{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardTwo;

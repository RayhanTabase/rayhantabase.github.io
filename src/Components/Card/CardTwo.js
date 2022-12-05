import React from 'react';
import GithubIcon from '../../Assets/github.svg';
import './css/card.css'

const CardTwo = ({category, skills=[]}) => {
  return (
    <div className="card-two card">
      <h3 className="title">{category}</h3>
      <div className="items-list">
        {skills.map((skill) => (
          <div className="item"> 
            <div> 
              <img className='icon-color1' src={GithubIcon} alt={`${skill}`} />
            </div>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardTwo;

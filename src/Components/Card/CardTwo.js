import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

import './css/card.css'

const CardTwo = ({category, skills=[]}) => {
  return (
    <div className="card-two card">
      <h3 className="title color-secondary">{category}</h3>
      <div className="items-list">
        {skills.map((skill) => (
          <div className="item"> 
            <div className='container-icon card-thumbnail'> 
              <BsFillPatchCheckFill />
            </div>
            <p className='container-skill-text color-secondary' >{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardTwo;

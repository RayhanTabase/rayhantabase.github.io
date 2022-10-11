import React from 'react';
import './css/intro.css'
import Greeting from './Greeting.js';
import Name from './Name.js';
import Position from './Position';
import ActionBtn from './ActionBtn';
import SocialMedia from './SocialMedia';


const Introduction =() => {
  return (
    <div className='container-intro margin-sides1'>
      <SocialMedia />
      <div className='container-intro-sections'>
        <Greeting />
        <Name />
        <Position />
        <ActionBtn />
      </div>
    </div>
  );
}

export default Introduction;

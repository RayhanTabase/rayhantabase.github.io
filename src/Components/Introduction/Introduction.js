import React from 'react';
import './css/intro.css'
import Greeting from './Greeting.js';
import Name from './Name.js';
import Position from './Position';
import ActionBtn from './ActionBtn';

const Introduction =() => {
  return (
    <div className='container-intro'>
      <div className='social-media-container'>
        <p>a</p>
        <p>a</p>
        <p>a</p>
      </div>
      <div className='container-intro-sections'>
        <Greeting />
        <Name />
        <Position />
        <ActionBtn />
      </div>
      <div className='social-media-container'>
        <p>b</p>
        <p>b</p>
        <p>b</p>
      </div>
    </div>
  );
}

export default Introduction;

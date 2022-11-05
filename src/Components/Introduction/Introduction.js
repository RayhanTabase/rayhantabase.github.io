import React from 'react';
import './css/intro.css'
import Greeting from './Greeting.js';
import Name from './Name.js';
import Position from './Position';
import ActionBtn from './ActionBtn';
import SocialMedia from './SocialMedia';


const Introduction =() => {
  return (
    <section className='container-intro'>
      <SocialMedia />
      <div className='container-intro-sections'>
        <Greeting />
        <Name />
        <Position />
        <ActionBtn />
      </div>
    </section>
  );
}

export default Introduction;

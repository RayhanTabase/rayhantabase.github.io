import React, { useState }  from 'react';
import Heading from '../Heading/Heading';
import CardFour from '../Card/CardFour';
import './testimonials.css';
import GithubIcon from '../../Assets/github.svg';

const Testimonials =() => {
  const TESTIMONIALS = {
    'one':{
      icon:GithubIcon, 
      title:'someone',
      text:'I worked with Salim during studying at Microverse and it was always a delight working with him. He is a good learner and brilliant developer and could apply everything he had learned smoothly without any problem or lack of understanding Feel like you are working with a senior who has several years of experience'
    },
    'two':{
      icon:GithubIcon, 
      title:'2',
      text:'2222'
    },
    'three':{
      icon:GithubIcon, 
      title:'333',
      text:'33333'
    },
  }

  const [carousel, setCarousel] = useState('one');
  
  return (
    <section className='skills'>
      <Heading desc1="Feedback From Peers" title="Testimonials" />
      <div className='container-cards-testimonials'>
        <CardFour 
          icon={TESTIMONIALS[carousel].icon}
          title={TESTIMONIALS[carousel].title}
          text={TESTIMONIALS[carousel].text}
        />
        <div>
        {
          Object.keys(TESTIMONIALS).map((testimony)=> (
            <button onClick={()=> setCarousel(testimony)}>
              {testimony}
            </button>
          ))
        }
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

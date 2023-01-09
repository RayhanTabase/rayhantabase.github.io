import React, { useState }  from 'react';
import Heading from '../Heading/Heading';
import CardFour from '../Card/CardFour';
import './testimonials.css';
import linkedInIcon from '../../Assets/linkedin.svg';

const Testimonials =() => {
  const TESTIMONIALS = {
    'one':{
      icon:linkedInIcon,
      linkedInLink: 'https://www.linkedin.com/in/armali/',
      title:'Ahmed Mohamed',
      text:'I worked with Salim during studying at Microverse and it was always a delight working with him. He is a good learner and brilliant developer and could apply everything he had learned smoothly without any problem or lack of understanding Feel like you are working with a senior who has several years of experience'
    },
  }

  const [carousel, setCarousel] = useState('one');
  
  return (
    <section className='skills'>
      <Heading desc1="Feedback From Peers" title="Testimonials" />
      <div className='container-cards-testimonials'>
        <CardFour 
          icon={TESTIMONIALS[carousel].icon}
          linkedInLink={TESTIMONIALS[carousel].linkedInLink}
          title={TESTIMONIALS[carousel].title}
          text={TESTIMONIALS[carousel].text}
        />
      </div>
      <div className="container-carousel-pickers">
        {
          Object.keys(TESTIMONIALS).length > 1 
          &&
          Object.keys(TESTIMONIALS).map((testimony)=> (
            <button className={`carousel-picker ${carousel === testimony && 'carousel-picker-picked'}`} onClick={()=> setCarousel(testimony)}>
            </button>
          ))
        }
      </div>
    </section>
  );
}

export default Testimonials;

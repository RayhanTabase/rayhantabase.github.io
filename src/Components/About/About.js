import React from 'react';
import './css/about.css';
import './css/about_mobile.css';
import Description from './Description';
import Image from './Image';
import Heading from '../Heading/Heading';

const About =() => {
  return (
    <section className='about-me'>
      <Heading desc1="Get to Know" title="About Me" />
      <div className='content-about'>
        <Image />
        <div className='content-about-profile'>
          <div>Experience</div>
          <div>Projects</div>
          <Description />
          <button className='btn-style-2'>Let's talk</button>
        </div>
      </div>
    </section>
  );
}

export default About;

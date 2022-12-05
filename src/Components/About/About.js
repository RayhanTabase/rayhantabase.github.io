import React from 'react';
import './css/about.css';
import Description from './Description';
import Image from './Image';
import Heading from '../Heading/Heading';
import CardOne from '../Card/CardOne';
import GithubIcon from '../../Assets/github.svg';

const About =() => {
  const EXPERIENCE = {
    thumbnail: GithubIcon,
    title: 'Experience',
    text: '2.5 years'
  };

  const PROJECTS = {
    thumbnail: GithubIcon,
    title: 'Projects',
    text: '30+ Completed Projects'
  };

  return (
    <section id='about-me'>
      <Heading desc1="Get to know" title="About Me" />
      <div className='content-about'>
        <Image />
        <div className="content-about-profile">
          <div className="cards-container-about">
            <CardOne thumbnail={EXPERIENCE.thumbnail} title={EXPERIENCE.title} text={EXPERIENCE.text}  />
            <CardOne thumbnail={PROJECTS.thumbnail} title={PROJECTS.title} text={PROJECTS.text}  />
          </div>
          <Description />
          <div className="single-btn-container">
            <button className="btn-style-2">Let's talk</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

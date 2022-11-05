import React from 'react';
import Heading from '../Heading/Heading';
import CardThree from '../Card/CardThree';

const Skills =() => {
  const PROJECTS = [
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ]
    },
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ]
    },
  ]

  return (
    <section className='portfolio'>
      <Heading desc1="My Recent Work" title="Portfolio" />
      <div className=''>
            
        {
          PROJECTS.map((project) => (
            <CardThree
                image={project.image}
                title={project.title}
                text={project.text}
                skills={project.skills}
              />
          ))
        }
      </div>
    </section>
  );
}

export default Skills;

import React from 'react';
import Heading from '../Heading/Heading';
import CardThree from '../Card/CardThree';
import "./portfolio.css";

const Skills =() => {
  const PROJECTS = [
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ],
      repo: '',
      live: ''
    },
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ],
      repo: '',
      live: ''
    },
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ],
      repo: '',
      live: ''
    },
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ],
      repo: '',
      live: ''
    },
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ],
      repo: '',
      live: ''
    },
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ],
      repo: '',
      live: ''
    },
    {
      image: 'test',
      title: 'test',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      skills: [
        'test', 'test', 'testtest', 'teststetststess'
      ],
      repo: '',
      live: ''
    },
    {
      image: 'test',
      title: 'test',
      text: 'test',
      skills: [
        'test', 'test'
      ],
      repo: '',
      live: ''
    },
  ]

  return (
    <section className='portfolio'>
      <Heading desc1="My Recent Work" title="Portfolio" />
      <div className='container-cards-projects'>
        {
          PROJECTS.map((project) => (
            <CardThree
                key={project.title}
                image={project.image}
                title={project.title}
                text={project.text}
                skills={project.skills}
                repo={project.repo}
                live={project.live}
              />
          ))
        }
      </div>
    </section>
  );
}

export default Skills;

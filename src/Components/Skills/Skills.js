import React from 'react';
import Heading from '../Heading/Heading';
import CardTwo from '../Card/CardTwo';

const Skills =() => {
  const SKILLS = [
    {
      category: "Front-end Development",
      skills: [
        "HTML", 
        "JavaScript",
        "Redux",
        "React",
        "CSS",
        "SCSS",
        "Tailwind",
        "Bootstrap",
        "HTML Canvas",
        "Vue",
        "Angular",
        "Apollo GraphQL Server",
        "Scratch"
      ]
    },

    {
      category: "Back-end Development",
      skills: [
        "Python",
        "Ruby",
        "Django",
        "Ruby on Rails",
        "PostgreSQL",
        "RSPEC",
        "Swagger",
      ]
    },

    {
      category: "Game Development",
      skills: [
        "Pygame",
        "Lua",
        "C#",
        "Unity",
        "JavaScript and HTML Canvas"
      ]
    },

    {
      category: "Methodologies and Interpersonal",
      skills: [
        "Agile",
        "Product Ownership",
        "Scrum",
        "Confluence",
        "Jira",
        "Pair programming",
        "Test driven development",
        "Unit testing",
      ]
    }
  ]

  return (
    <section className='skills'>
      <Heading desc1="The Skills I Have" title="Skills" />
      <div className=''>
      {
        SKILLS.map((skillType) => (
          <CardTwo key={skillType.category} category={skillType.category} skills={skillType.skills} />
        ))
      }
    </div>
    </section>
  );
}

export default Skills;

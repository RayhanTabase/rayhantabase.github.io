import React from 'react';
import Heading from '../Heading/Heading';
import CardTwo from '../Card/CardTwo';
import './skills.css';
import './skills_mobile.css';


const Skills =() => {
  const SKILLS = [
    {
      category: "Front-end Development",
      skills: [
        "HTML", 
        "JavaScript",
        "React",
        "CSS",
        "Tailwind",
        "Bootstrap",
        "Vue",
        "Angular",
        "Apollo GraphQL Server",
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
        "RSpec",
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
        "HTML Canvas",
      ]
    },

    {
      category: "Other Skills and Tools",
      skills: [
        "Agile",
        "Product Ownership",
        "Scrum Master",
        "Confluence",
        "Jira",
        "Pair programming",
        "Test driven development",
        "Unit testing",
      ]
    }
  ]

  return (
    <section className='skills' id='skills'>
      <Heading desc1="The Skills I Have" title="Skills" />
      <div className='container-cards-skills'>
      {
        SKILLS.map((skillType) => (
          <CardTwo
            key={skillType.category}
            category={skillType.category}
            skills={skillType.skills}
          />
        ))
      }
    </div>
    </section>
  );
}

export default Skills;

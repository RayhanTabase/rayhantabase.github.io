import React from 'react';
import Heading from '../Heading/Heading';
import CardThree from '../Card/CardThree';
import "./portfolio.css";

const Skills =() => {
  const PROJECTS = [
    {
      image: 'https://raw.githubusercontent.com/RayhanTabase/countries-worldwide/develop/assets/screengif.gif',
      title: 'Countries App',
      text: 'An App that displays countries around the world, including information about their population and cities.',
      skills: [
        'React', 'Redux','Tailwind CSS','API'
      ],
      repo: 'https://github.com/RayhanTabase/countries-worldwide',
      live: 'https://festive-shirley-0ca9cb.netlify.app'
    },
    {
      image: 'https://raw.githubusercontent.com/RayhanTabase/bookstore/dev/screenshot/pc.jpeg',
      title: 'Bookstore',
      text: 'Book store is an app that displays a list of books, allows users to add a new book to the list as well as remove a selected book',
      skills: [
        'React', 'CSS'
      ],
      repo: 'https://github.com/RayhanTabase/bookstore',
      live: 'https://rayhantabase.github.io/bookstore/'
    },
    {
      image: 'https://raw.githubusercontent.com/RayhanTabase/Python-Bootcamp-Mock-Page/main/static/images/readme/pc.jpeg',
      title: 'Python Bootcamp',
      text: 'A webpage providing details on an upcomming python bootcamp',
      skills: [
        'HTML', 'SCSS', 'JavaScript'
      ],
      repo: 'https://github.com/RayhanTabase/Python-Bootcamp-Mock-Page',
      live: 'https://rayhantabase.github.io/Python-Bootcamp-Mock-Page/'
    },
    {
      image: 'https://raw.githubusercontent.com/RayhanTabase/budget_app/dev/screenshots/s1.jpeg',
      title: 'Budget App',
      text: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      skills: [
        'Ruby on Rails','PostgreSQL','Tailwind css'
      ],
      repo: 'https://github.com/RayhanTabase/budget_app',
      live: 'https://github.com/RayhanTabase/budget_app'
    },
    {
      image: 'https://raw.githubusercontent.com/RayhanTabase/salim_abdulai_storefront/dev/snapshots/pl.jpeg',
      title: 'Storefront',
      text: 'A minimalist storefront . ecommerce website where users can browse produts by categories, view information about a product and add products to cart for checkout',
      skills: [
        'React','Redux','GraphQL'
      ],
      repo: 'https://github.com/RayhanTabase/salim_abdulai_storefront',
      live: 'https://github.com/RayhanTabase/salim_abdulai_storefront'
    },
    {
      image: 'https://raw.githubusercontent.com/RayhanTabase/Polling-app/master/sccreenshot/polImage9.jpeg',
      title: 'Election App',
      text: 'A CRUD app where users can create elections with different categories for other users to vote in.',
      skills: [
        'Django','CSS','React'
      ],
      repo: 'https://github.com/RayhanTabase/Polling-app',
      live: 'https://github.com/RayhanTabase/Polling-app'
    }
  ]

  return (
    <section className='portfolio' id='portfolio'>
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

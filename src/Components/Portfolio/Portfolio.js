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
        'React','Redux','Tailwind CSS','API'
      ],
      repo: 'https://github.com/RayhanTabase/countries-worldwide',
      live: 'https://festive-shirley-0ca9cb.netlify.app'
    },
    {
      image: 'https://raw.githubusercontent.com/RayhanTabase/bookstore/dev/screenshot/pc.jpeg',
      title: 'Bookstore',
      text: 'A Book store is an app that displays a list of books, allows users to add a new book to the list as well as remove a selected book',
      skills: [
        'React','CSS'
      ],
      repo: 'https://github.com/RayhanTabase/bookstore',
      live: 'https://rayhantabase.github.io/bookstore/'
    },
    {
      image: 'https://raw.githubusercontent.com/RayhanTabase/Python-Bootcamp-Mock-Page/main/static/images/readme/pc.jpeg',
      title: 'Python Bootcamp',
      text: 'A webpage providing details on an upcoming python boot camp',
      skills: [
        'HTML','SCSS','JavaScript'
      ],
      repo: 'https://github.com/RayhanTabase/Python-Bootcamp-Mock-Page',
      live: 'https://rayhantabase.github.io/Python-Bootcamp-Mock-Page/'
    },
    {
      image: 'https://devmunyi.github.io/Portfolio/img/capstone/doctors-booking.png',
      title: 'DocBooker',
      text: 'This application consists of a front-end react app, that relies on a rails backend, to allow a user to book an appointment with a doctor, from the list of doctors available.',
      skills: [
        'Ruby on Rails','PostgreSQL','React','Redux'
      ],
      repo: 'https://github.com/devMunyi/DocBooker-frontend',
      live: 'https://book-doc-appointment.netlify.app/'
    },
    // {
    //   image: 'https://raw.githubusercontent.com/RayhanTabase/salim_abdulai_storefront/dev/snapshots/pl.jpeg',
    //   title: 'Storefront',
    //   text: 'A minimalist storefront. e-commerce website where users can browse products by categories, view information about a product and add products to a cart for checkout',
    //   skills: [
    //     'React','Redux','GraphQL'
    //   ],
    //   repo: 'https://github.com/RayhanTabase/salim_abdulai_storefront',
    //   live: ''
    // },
    // {
    //   image: 'https://raw.githubusercontent.com/RayhanTabase/Polling-app/master/sccreenshot/polImage9.jpeg',
    //   title: 'Election App',
    //   text: 'A CRUD app where users can create elections with different categories for other users to vote in.',
    //   skills: [
    //     'Django','Python','CSS','React'
    //   ],
    //   repo: 'https://github.com/RayhanTabase/Polling-app',
    //   live: ''
    // }
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

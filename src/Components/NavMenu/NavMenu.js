import React from 'react';
import './navMenu.css';

const NavMenu =() => {
  return (
    <div className='container-navMenu'>
      <nav className='navMenu' id='nav-menu'>
        <a className='nav-item' href="#introduction">Intro</a>
        <a className='nav-item' href="#about-me">About</a>
        <a className='nav-item' href="#skills">Skills</a>
        <a className='nav-item' href="#portfolio">Pf</a>
        <a className='nav-item' href="#contact-me">Contact</a>
      </nav>
    </div>
  );
}

export default NavMenu;

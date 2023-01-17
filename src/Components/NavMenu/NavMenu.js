import React from 'react';
import './navMenu.css';
import NavItem from './NavItem';
import LinkedInIcon from '../../Assets/linkedin.svg'


const NavMenu =() => {
  
  const NAV_SECTION = [
    {icon: LinkedInIcon, section: 'introduction'},
    {icon: LinkedInIcon, section: 'about-me'},
    {icon: LinkedInIcon, section: 'skills'},
    {icon: LinkedInIcon, section: 'portfolio'},
    {icon: LinkedInIcon, section: 'contact-me'},
  ]

  return (
    <div className='container-navMenu'>
      <nav className='navMenu transparent-effect' id='nav-menu'>
        {
          NAV_SECTION.map((item) => (
            <NavItem key={item.section} icon={item.icon} section={item.section}  />
          ))
        }
      </nav>
    </div>
  );
}

export default NavMenu;

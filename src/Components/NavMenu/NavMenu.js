import React, { useState } from 'react';
import './navMenu.css';
import NavItem from './NavItem';
import LinkedInIcon from '../../Assets/linkedin.svg'


const NavMenu =() => {
  const [opened, setOpened] = useState(true);
  
  const NAV_SECTION = [
    {icon: LinkedInIcon, section: 'introduction'},
    {icon: LinkedInIcon, section: 'about-me'},
    {icon: LinkedInIcon, section: 'skills'},
    {icon: LinkedInIcon, section: 'portfolio'},
    {icon: LinkedInIcon, section: 'contact-me'},
  ]

  const changeNavOpen = () => {
    setOpened((prev) => !prev);
  }

  return (
    <div className="container-navMenu">
      <nav className={`${!opened && "navMenu-close" } navMenu transparent-effect`} id='nav-menu'>
        {
          NAV_SECTION.map((item) => (
            <NavItem key={item.section} icon={item.icon} section={item.section}  />
          ))
        }
        {/* <div onClick={changeNavOpen}>C</div> */}
      </nav>
    </div>
  );
}

export default NavMenu;

import React, { useState } from 'react';
import './navMenu.css';
import NavItem from './NavItem';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiLibrary } from 'react-icons/bi';
import { BsTools, BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';


const NavMenu =() => {
  const [opened, setOpened] = useState(true);
  
  const NAV_SECTION = [
    {icon: <AiFillHome />, section: 'introduction'},
    {icon: <CgProfile />, section: 'about-me'},
    {icon: <BsTools />, section: 'skills'},
    {icon: <BiLibrary/>, section: 'portfolio'},
    {icon: <AiFillMessage />, section: 'contact-me'},
  ]

  const changeNavOpen = () => {
    setOpened((prev) => !prev);
  }

  return (
    <div className="container-navMenu">
      <nav className={`${!opened && "navMenu-close" } navMenu transparent-effect`} id='nav-menu'>
        {
          NAV_SECTION.map((item) => (
            <NavItem key={item.section} icon={item.icon} section={item.section} closed={opened}  />
          ))
        }
        <button className='hide-menu' onClick={changeNavOpen}>
          {opened ? <BsChevronDoubleRight /> : <BsChevronDoubleLeft /> }
        </button>
      </nav>
    </div>
  );
}

export default NavMenu;

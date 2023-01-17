import React from 'react';

const NavItem =({icon, section}) => {
  return (
    <a className='nav-item' href={`#${section}`}>
      <img className='' src={icon} alt={`go-to-${section}`} />
    </a>
  );
}

export default NavItem;

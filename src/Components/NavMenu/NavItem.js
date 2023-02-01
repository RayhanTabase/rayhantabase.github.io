import React from 'react';

const NavItem =({icon, section, opened}) => {
  return (
    <a className={`${!opened && 'nav-item-closed'} nav-item`} href={`#${section}`}>
      {icon}
    </a>
  );
}

export default NavItem;

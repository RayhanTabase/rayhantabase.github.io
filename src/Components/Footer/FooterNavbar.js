import React from 'react';

const FooterNavbar =() => {
  const COPYRIGHT = '© All rights reserved Salim A. 2023';
  
  return (
    <nav className='nav-footer'>
      <div className='copyright'>
        {COPYRIGHT}
      </div>
    </nav>
  );
}

export default FooterNavbar;

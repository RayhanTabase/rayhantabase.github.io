import React from 'react';

const FooterNavbar =() => {
  const COPYRIGHT = '© All rights reserved S. A. 2022';
  
  return (
    <nav className='nav-footer'>
      <div className='copyright'>
        {COPYRIGHT}
      </div>
      <div>
        Others
      </div>
    </nav>
  );
}

export default FooterNavbar;

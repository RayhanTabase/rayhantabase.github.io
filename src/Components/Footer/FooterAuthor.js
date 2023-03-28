import React from 'react';

const FooterAuthor =() => {
  const NAME = 'Salim Abdulai';
  const STATEMENT = 'Creating Customer-Centric Software Solutions'

  return (
    <nav className='footer-author'>
      <h3 className=''>
        {NAME}
      </h3>
      <div>
        {STATEMENT}
      </div>
    </nav>
  );
}

export default FooterAuthor;

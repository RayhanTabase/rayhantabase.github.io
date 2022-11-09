import React from 'react';

const FooterAuthor =() => {
  const NAME = 'Salim';
  const STATEMENT = 'Creating Software Solutions'

  
  return (
    <nav className='footer-author'>
      <div className=''>
        {NAME}
      </div>
      <div>
        {STATEMENT}
      </div>
    </nav>
  );
}

export default FooterAuthor;

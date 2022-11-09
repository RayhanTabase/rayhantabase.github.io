import React from 'react';
import './footer.css';
import FooterNavbar from './FooterNavbar';
import SocialMedia from '../Introduction/SocialMedia';
import FooterAuthor from './FooterAuthor';

const Footer =() => {
  return (
    <div className='footer'>
      <FooterAuthor />
      <SocialMedia />
      <FooterNavbar />
    </div>
  );
}

export default Footer;

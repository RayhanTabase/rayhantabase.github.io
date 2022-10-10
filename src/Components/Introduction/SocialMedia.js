import React from 'react';
import Social from './Socials';
import GithubIcon from '../../Assets/github.svg';
import LinkedInIcon from '../../Assets/linkedin.svg'
import './css/socialmedia.css';


const SocialMedia =() => {
  const SOCIAL_MEDIA = [
    {name: 'Github', icon: GithubIcon, url: 'https://github.com/RayhanTabase'},
    {name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/salimabdulai'},
    {name: 'Github', icon: GithubIcon, url: 'https://github.com/RayhanTabase'},
  ]
  return (
    <div className='social-media-container'>
      {
        SOCIAL_MEDIA.map((medium) => (
          <Social name={medium.name} icon={medium.icon} url={medium.url} />
        ))
      }
    </div>
  );
}

export default SocialMedia;

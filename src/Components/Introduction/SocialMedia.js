import React from 'react';

const SocialMedia =({name, img, url}) => {
  return (
    <a href={`${url}`}>
      {/* {<icon altName={name}/>} */}
    </a>
  );
}

export default Socials;

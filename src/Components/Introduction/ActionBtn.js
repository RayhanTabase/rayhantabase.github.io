import React from 'react';

const ActionBtn =() => {
  const CV_URL = 'https://github.com/RayhanTabase/config/raw/main/resume.pdf';
  return (
    <div className='buttonsContainer'>
      <a href={`${CV_URL}`}>
        <button className='btn-style-1'>Download CV</button>
      </a>
      <a href='#contact-me' className='btn-style-2 btn'>Let's talk</a>
    </div>
  );
}

export default ActionBtn;

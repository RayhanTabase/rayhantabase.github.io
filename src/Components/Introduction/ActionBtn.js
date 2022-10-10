import React from 'react';

const ActionBtn =() => {
  const CV_URL = 'https://github.com/RayhanTabase/config/raw/main/resume.pdf';
  return (
    <div className='buttonsContainer'>
      <a href={`${CV_URL}`}>Download CV</a>
      <button className='btn-style-2'>Let's talk</button>
    </div>
  );
}

export default ActionBtn;

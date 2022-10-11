import React from 'react';
import TextTypeOne from '../TextType/TextTypeOne';
import TextTypeTwo from '../TextType/TextTypeTwo';

const Heading =() => {
  return (
    <div className='section-heading'>
      <TextTypeOne text={`Get to Know`} />
      <TextTypeTwo text={`About Me`} />
    </div>
  );
}

export default Heading;

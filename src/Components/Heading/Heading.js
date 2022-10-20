import React from 'react';
import TextTypeOne from '../TextType/TextTypeOne';
import TextTypeTwo from '../TextType/TextTypeTwo';

const Heading =({desc1='', desc2='', title=''}) => {
  return (
    <div className='section-heading'>
      <TextTypeOne text={desc1} />
      <TextTypeOne text={desc2} />
      <TextTypeTwo text={title} />
    </div>
  );
}

export default Heading;

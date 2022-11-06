import React from 'react';
import Heading from '../Heading/Heading';
import './contact.css';

const Contact =() => {
  return (
    <section className='contact'>
      <Heading desc1="Get In Touch" desc2="I do receive your messages and will respond asap if the valid email is provided 🙂" title="Contact Me" />
      <div className='contact-content'>
        <div>
          Email
        </div>
        <div>
          form
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from 'react';
import Heading from '../Heading/Heading';
import './contact.css';
import CardOne from '../Card/CardOne';
import { MdEmail } from 'react-icons/md';


const Contact =() => {
  return (
    <section id='contact-me'>
      <Heading desc1="Get In Touch" desc2="I do receive your messages and will respond asap if a valid email is provided 🙂" title="Contact Me" />
      <div className='contact-content'>
        <div className='container-email-card'>
          <CardOne 
            thumbnail={<MdEmail />}
            text={'salimabdulai2@yahoo.com'}
            title={'Email'}
            action={{text:'Send a message', link:'mailto:salimabdulai2@yahoo.com'}}
          />
        </div>
        <div className='container-contact-form'>
          <form action="https://formspree.io/f/xknkayjp" method="post" className='width-100'>
              <div className='width-100'>
                  <input type="text" maxlength="30" tabindex="0" placeholder="Full name" name="fullname" required />
              </div>
              <div className='width-100'>
                  <input type="email" tabindex="0" placeholder="Email" name="email" required />
              </div>
              <div className='width-100'>
                  <textarea name="message" tabindex="0" maxlength="500" placeholder="Message" required></textarea>
              </div>
              <div className="button-container">
                  <button className="btn-style-2" type="submit">Send Message</button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

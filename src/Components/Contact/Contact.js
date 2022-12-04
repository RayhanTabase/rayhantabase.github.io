import React from 'react';
import Heading from '../Heading/Heading';
import './contact.css';

const Contact =() => {
  return (
    <section id='contact-me'>
      <Heading desc1="Get In Touch" desc2="I do receive your messages and will respond asap if the valid email is provided 🙂" title="Contact Me" />
      <div className='contact-content'>
        <div>
          Email
        </div>
        <div>
          <form action="https://formspree.io/f/xknkayjp" method="post">
            <div>
                <div>
                    <input type="text" maxlength="30" placeholder="Full name" name="fullname" required />
                </div>
                <div>
                    <input type="email" placeholder="youraddress@gmail.com" name="email" required />
                </div>
                <div>
                    <textarea name="message" maxlength="500" placeholder="Enter text here" required></textarea>
                </div>
            </div>
            <div className="button-container">
                <button className="btn-style-2" type="submit">Get in touch</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

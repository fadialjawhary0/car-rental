import React from 'react';
import { Link } from 'react-router-dom';

import {
  IconMail,
  IconMailOpened,
  IconPhone,
  IconLocation,
} from '@tabler/icons-react';

import SharedHero from '../../components/SharedHero/SharedHero';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

import './ContactStyles.scss';

const Contact = () => {
  return (
    <div className='contact-container'>
      <SharedHero pageName='Contact' />
      <div className='container'>
        <div className='contact-content'>
          <div className='contact-content_left'>
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <div className='contact-content_left_links'>
              <Link>
                <IconPhone /> &nbsp; (123) 456-7869
              </Link>
              <Link>
                <IconMail /> &nbsp; carrental@carmail.com
              </Link>
              <Link>
                <IconLocation /> &nbsp; Amman, Jordan
              </Link>
            </div>
          </div>
          <form className='contact-content_right'>
            <div className='contact-content_right_field'>
              <label>
                Full Name <span>*</span>
              </label>
              <input type='text' placeholder='E.g: "Joe Shmoe"' />
            </div>
            <div className='contact-content_right_field'>
              <label>
                Email <span>*</span>
              </label>
              <input type='text' placeholder='youremail@example.com' />
            </div>
            <div className='contact-content_right_field'>
              <label>
                Tell us about it <span>*</span>
              </label>
              <textarea type='' rows={7} placeholder='Write Here...' />
            </div>
            <button type='submit'>
              <IconMailOpened /> &nbsp; Send Message
            </button>
          </form>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
};

export default Contact;

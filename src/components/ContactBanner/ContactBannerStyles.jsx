import React from 'react';

import { IconPhone } from '@tabler/icons-react';

import './ContactBannerStyles.scss';

const ContactBanner = () => {
  const phoneNumber = '(123) 456-7869';

  return (
    <div className='contact-banner'>
      <div className='contact-banner_overlay'></div>
      <div className='container'>
        <div className='banner-text'>
          <h2>Book a car by getting in touch with us</h2>
          <span>
            <IconPhone />
            <h3>{phoneNumber}</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;

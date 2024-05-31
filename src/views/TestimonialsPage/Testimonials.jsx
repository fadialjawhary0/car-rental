import React from 'react';

import SharedHero from '../../components/SharedHero/SharedHero';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

const TestimonialsPage = () => {
  return (
    <div className='testimonials-page'>
      <SharedHero pageName='Testimonials' />
      <Testimonials />
      <ContactBanner />
    </div>
  );
};

export default TestimonialsPage;

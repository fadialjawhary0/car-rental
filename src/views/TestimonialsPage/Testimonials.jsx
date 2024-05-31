import React from 'react';

import HeroPages from '../../components/HeroPages/HeroPages';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactBanner from '../../components/ContactBanner/ContactBannerStyles';

const TestimonialsPage = () => {
  return (
    <div className='testimonials-page'>
      <HeroPages pageName='Testimonials' />
      <Testimonials />
      <ContactBanner />
    </div>
  );
};

export default TestimonialsPage;

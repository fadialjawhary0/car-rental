import React from 'react';

import { TestimonialsService } from './services/TestimonialsService';

import './TestimonialsStyles.scss';

const Testimonials = () => {
  return (
    <div className='testimonials-section'>
      <div className='container'>
        <div className='testimonials-container'>
          <div className='testimonials-text-box'>
            <h4>Reviewed by People</h4>
            <h2>Client's Testimonials</h2>
            <p>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>

          <div className='testimonials-box'>
            {TestimonialsService.map(testimonial => (
              <div key={testimonial?.id} className='testimonial-card'>
                <p>"{testimonial?.quote}"</p>
                <div className='testimonial-card_author'>
                  <div className='testimonial-card_author_info'>
                    <img
                      className='profile-picture'
                      src={testimonial?.image}
                      alt='author'
                    />
                    <div className='testimonial-name-location'>
                      <h4>{testimonial?.name}</h4>
                      <p>{testimonial?.location}</p>
                    </div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='60'
                    height='60'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#ff4d30'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='tabler-icon tabler-icon-quote'>
                    <path d='M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5'></path>
                    <path d='M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5'></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

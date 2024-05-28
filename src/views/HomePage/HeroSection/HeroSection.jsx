import React from 'react';
import { Link } from 'react-router-dom';

import { IconChevronRight, IconCircleCheck } from '@tabler/icons-react';

import './HeroStyles.scss';
import HeroBg from '../../../assets/hero/hero-bg.png';
import HeroCar from '../../../assets/hero/main-car.png';

const HeroSection = () => {
  const bookBtn = () => {
    document
      .querySelector('#booking-section')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='hero-section' className='hero-section'>
      <div className='container'>
        <img
          className='hero-bg'
          src={HeroBg}
          alt='hero background'
          draggable={false}
        />
        <div className='hero-content'>
          <div className='hero-content-text'>
            <h4>Plan your trip now</h4>
            <h1>
              Save <span>big</span> with our car rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className='hero-content-text_buttons'>
              <Link
                className='hero-content-text_buttons_book-ride'
                onClick={bookBtn}
                to='/'>
                Book Ride &nbsp; <IconCircleCheck />
              </Link>
              <Link className='hero-content-text_buttons_learn-more'>
                Learn More &nbsp; <IconChevronRight />
              </Link>
            </div>
          </div>
          <img
            src={HeroCar}
            alt='Hero car'
            className='hero-content_car-img'
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
